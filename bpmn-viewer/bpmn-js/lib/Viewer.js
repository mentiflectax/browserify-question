'use strict';

var Diagram = require('diagram-js'),
    BpmnModdle = require('bpmn-moddle'),
    $ = require('jquery'),
    _ = require('lodash');

var Importer = require('./import/Importer');


function getSvgContents(diagram) {
  var outerNode = diagram.get('canvas').getContainer();

  var svg = outerNode.innerHTML;
  return svg.replace(/^.*<svg[^>]*>|<\/svg>.*$/g, '')
            .replace('<desc>Created with Snap</desc>', '')
            .replace(/<g class="viewport"( transform="[^"]*")?/, '<g');
}

function initListeners(diagram, listeners) {
  var events = diagram.get('eventBus');

  listeners.forEach(function(l) {
    events.on(l.event, l.handler);
  });
}

function checkValidationError(err) {

  // check if we can help the user by indicating wrong BPMN 2.0 xml
  // (in case he or the exporting tool did not get that right)

  var pattern = /unparsable content <([^>]+)> detected([\s\S]*)$/;
  var match = pattern.exec(err.message);

  if (match) {
    err.message =
      'unparsable content <' + match[1] + '> detected; ' +
      'this may indicate an invalid BPMN 2.0 diagram file' + match[2];
  }

  return err;
}

/**
 * A viewer for BPMN 2.0 diagrams
 *
 * @class
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {String|Number} [options.width] the width of the viewer
 * @param {String|Number} [options.height] the height of the viewer
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */
function Viewer(options) {
  this.options = options = options || {};

  var parent = options.container || $('body');

  var container = $('<div></div>').addClass('bjs-container').css({
    position: 'relative'
  }).appendTo(parent);

  _.forEach([ 'width', 'height' ], function(a) {
    if (options[a]) {
      container.css(a, options[a]);
    }
  });

  // unwrap jquery
  this.container = container.get(0);


  /**
   * The code in the <project-logo></project-logo> area
   * must not be changed, see http://bpmn.io/license for more information
   *
   * <project-logo>
   */

  /* jshint -W101 */

  /* jshint +W101 */

  /* </project-logo> */
}

Viewer.prototype.importXML = function(xml, done) {

  var self = this;
  var start = new Date().getTime();
  this.moddle = this.createModdle();

  this.moddle.fromXML(xml, 'bpmn:Definitions', function(err, definitions) {

    if (err) {
      err = checkValidationError(err);
      return done(err);
    }

    self.importDefinitions(definitions, function(err, warnings) {
      console.info('[bpmn-js] import finished in ' + (new Date().getTime() - start) + 'ms');

      done(err, warnings);
    });
  });
};

Viewer.prototype.saveXML = function(options, done) {

  if (!done) {
    done = options;
    options = {};
  }

  var definitions = this.definitions;

  if (!definitions) {
    return done(new Error('no definitions loaded'));
  }

  this.moddle.toXML(definitions, options, function(err, xml) {
    done(err, xml);
  });
};

Viewer.prototype.createModdle = function() {
  return new BpmnModdle();
};

var SVG_HEADER =
'<?xml version="1.0" encoding="utf-8"?>\n' +
'<!-- created with bpmn-js / http://bpmn.io -->\n' +
'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">\n';

var SVG_FOOTER = '</svg>';

Viewer.prototype.saveSVG = function(options, done) {
  if (!done) {
    done = options;
    options = {};
  }

  if (!this.definitions) {
    return done(new Error('no definitions loaded'));
  }

  var svgContents = getSvgContents(this.diagram);

  var svg = SVG_HEADER + svgContents + SVG_FOOTER;

  done(null, svg);
};

Viewer.prototype.get = function(name) {

  if (!this.diagram) {
    throw new Error('no diagram loaded');
  }

  return this.diagram.get(name);
};

Viewer.prototype.invoke = function(fn) {

  if (!this.diagram) {
    throw new Error('no diagram loaded');
  }

  return this.diagram.invoke(fn);
};

Viewer.prototype.importDefinitions = function(definitions, done) {

  // use try/catch to not swallow synchronous exceptions
  // that may be raised during model parsing
  try {
    if (this.diagram) {
      this.clear();
    }

    this.definitions = definitions;
    this.diagram = this._createDiagram(this.options);

    this._init(this.diagram);

    Importer.importBpmnDiagram(this.diagram, definitions, done);
  } catch (e) {
    done(e);
  }
};

Viewer.prototype._init = function(diagram) {
  initListeners(diagram, this.__listeners || []);
};

Viewer.prototype._createDiagram = function(options) {

  var modules = [].concat(options.modules || this.getModules(), options.additionalModules || []);

  // add self as an available service
  modules.unshift({
    bpmnjs: [ 'value', this ],
    moddle: [ 'value', this.moddle ]
  });

  options = _.omit(options, 'additionalModules');

  options = _.extend(options, {
    canvas: { container: this.container },
    modules: modules
  });

  return new Diagram(options);
};


Viewer.prototype.getModules = function() {
  return this._modules;
};

/**
 * Remove all drawn elements from the viewer
 */
Viewer.prototype.clear = function() {
  var diagram = this.diagram;

  if (diagram) {
    diagram.destroy();
  }
};

/**
 * Register an event listener on the viewer
 *
 * @param {String} event
 * @param {Function} handler
 */
Viewer.prototype.on = function(event, handler) {
  var diagram = this.diagram,
      listeners = this.__listeners = this.__listeners || [];

  listeners = this.__listeners || [];
  listeners.push({ event: event, handler: handler });

  if (diagram) {
    diagram.get('eventBus').on(event, handler);
  }
};

// modules the viewer is composed of
Viewer.prototype._modules = [
  require('./core'),
  require('./draw'),
  require('diagram-js/lib/features/selection'),
  require('diagram-js/lib/features/overlays')
];

module.exports = Viewer;