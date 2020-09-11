( function ( global ) {

"use strict";

/**
 * TinyStack
 *
 * @constructor
 */
function TinyStack () {
	this.data = [null];
	this.top  = 0;
}

/**
 * Clears the stack
 *
 * @method clear
 * @memberOf TinyStack
 * @return {Object} {@link TinyStack}
 */
TinyStack.prototype.clear = function clear () {
	this.data = [null];
	this.top  = 0;

	return this;
};

/**
 * Gets the size of the stack
 *
 * @method length
 * @memberOf TinyStack
 * @return {Number} Size of stack
 */
TinyStack.prototype.length = function length () {
	return this.top;
};

/**
 * Gets the item at the top of the stack
 *
 * @method peek
 * @memberOf TinyStack
 * @return {Mixed} Item at the top of the stack
 */
TinyStack.prototype.peek = function peek () {
	return this.data[this.top];
};

/**
 * Gets & removes the item at the top of the stack
 *
 * @method pop
 * @memberOf TinyStack
 * @return {Mixed} Item at the top of the stack
 */
TinyStack.prototype.pop = function pop () {
	if ( this.top > 0 ) {
		this.top--;

		return this.data.pop();
	}
	else {
		return undefined;
	}
};

/**
 * Pushes an item onto the stack
 *
 * @method push
 * @memberOf TinyStack
 * @return {Object} {@link TinyStack}
 */
TinyStack.prototype.push = function push ( arg ) {
	this.data[++this.top] = arg;

	return this;
};

/**
 * TinyStack factory
 *
 * @method factory
 * @return {Object} {@link TinyStack}
 */
function factory () {
	return new TinyStack();
}

// Node, AMD & window supported
if ( typeof exports != "undefined" ) {
	module.exports = factory;
}
else if ( typeof define == "function" ) {
	define( function () {
		return factory;
	} );
}
else {
	global.stack = factory;
}
} )( this );