module.exports={
  "name": "BPMN20",
  "uri": "http://www.omg.org/spec/BPMN/20100524/MODEL",
  "associations": [],
  "types": [
    {
      "name": "Interface",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "operations",
          "type": "Operation",
          "association": "A_operations_interface",
          "isMany": true
        },
        {
          "name": "implementationRef",
          "type": "String",
          "isAttr": true
        }
      ]
    },
    {
      "name": "Operation",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "inMessageRef",
          "type": "Message",
          "association": "A_inMessageRef_operation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "outMessageRef",
          "type": "Message",
          "association": "A_outMessageRef_operation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "errorRefs",
          "type": "Error",
          "association": "A_errorRefs_operation",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "implementationRef",
          "type": "String",
          "isAttr": true
        }
      ]
    },
    {
      "name": "EndPoint",
      "superClass": [
        "RootElement"
      ]
    },
    {
      "name": "Auditing",
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "GlobalTask",
      "superClass": [
        "CallableElement"
      ],
      "properties": [
        {
          "name": "resources",
          "type": "ResourceRole",
          "association": "A_resources_globalTask",
          "isMany": true
        }
      ]
    },
    {
      "name": "Monitoring",
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "Performer",
      "superClass": [
        "ResourceRole"
      ]
    },
    {
      "name": "Process",
      "superClass": [
        "FlowElementsContainer",
        "CallableElement"
      ],
      "properties": [
        {
          "name": "processType",
          "type": "ProcessType",
          "isAttr": true
        },
        {
          "name": "isClosed",
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "auditing",
          "type": "Auditing",
          "association": "A_auditing_process"
        },
        {
          "name": "monitoring",
          "type": "Monitoring",
          "association": "A_monitoring_process"
        },
        {
          "name": "properties",
          "type": "Property",
          "association": "A_properties_process",
          "isMany": true
        },
        {
          "name": "supports",
          "type": "Process",
          "association": "A_supports_process",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "definitionalCollaborationRef",
          "type": "Collaboration",
          "association": "A_definitionalCollaborationRef_process",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "isExecutable",
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "resources",
          "type": "ResourceRole",
          "association": "A_resources_process",
          "isMany": true
        },
        {
          "name": "artifacts",
          "type": "Artifact",
          "association": "A_artifacts_process",
          "isMany": true
        },
        {
          "name": "correlationSubscriptions",
          "type": "CorrelationSubscription",
          "association": "A_correlationSubscriptions_process",
          "isMany": true
        }
      ]
    },
    {
      "name": "LaneSet",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "lanes",
          "type": "Lane",
          "association": "A_lanes_laneSet",
          "isMany": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Lane",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "childLaneSet",
          "type": "LaneSet",
          "association": "A_childLaneSet_parentLane"
        },
        {
          "name": "partitionElementRef",
          "type": "BaseElement",
          "association": "A_partitionElementRef_lane",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "flowNodeRef",
          "type": "FlowNode",
          "association": "A_flowNodeRefs_lanes",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "partitionElement",
          "type": "BaseElement",
          "association": "A_partitionElement_lane"
        }
      ]
    },
    {
      "name": "GlobalManualTask",
      "superClass": [
        "GlobalTask"
      ]
    },
    {
      "name": "ManualTask",
      "superClass": [
        "Task"
      ]
    },
    {
      "name": "UserTask",
      "superClass": [
        "Task"
      ],
      "properties": [
        {
          "name": "renderings",
          "type": "Rendering",
          "association": "A_renderings_usertask",
          "isMany": true
        },
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Rendering",
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "HumanPerformer",
      "superClass": [
        "Performer"
      ]
    },
    {
      "name": "PotentialOwner",
      "superClass": [
        "HumanPerformer"
      ]
    },
    {
      "name": "GlobalUserTask",
      "superClass": [
        "GlobalTask"
      ],
      "properties": [
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "renderings",
          "type": "Rendering",
          "association": "A_renderings_globalUserTask",
          "isMany": true
        }
      ]
    },
    {
      "name": "Gateway",
      "isAbstract": true,
      "superClass": [
        "FlowNode"
      ],
      "properties": [
        {
          "name": "gatewayDirection",
          "type": "GatewayDirection",
          "default": "Unspecified",
          "isAttr": true
        }
      ]
    },
    {
      "name": "EventBasedGateway",
      "superClass": [
        "Gateway"
      ],
      "properties": [
        {
          "name": "instantiate",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "eventGatewayType",
          "type": "EventBasedGatewayType",
          "isAttr": true,
          "default": "Exclusive"
        }
      ]
    },
    {
      "name": "ComplexGateway",
      "superClass": [
        "Gateway"
      ],
      "properties": [
        {
          "name": "activationCondition",
          "type": "Expression",
          "association": "A_activationCondition_complexGateway"
        },
        {
          "name": "default",
          "type": "SequenceFlow",
          "isAttr": true,
        }
      ]
    },
    {
      "name": "ExclusiveGateway",
      "superClass": [
        "Gateway"
      ],
      "properties": [
        {
          "name": "default",
          "type": "SequenceFlow",
          "isAttr": true,
        }
      ]
    },
    {
      "name": "InclusiveGateway",
      "superClass": [
        "Gateway"
      ],
      "properties": [
        {
          "name": "default",
          "type": "SequenceFlow",
          "isAttr": true,
        }
      ]
    },
    {
      "name": "ParallelGateway",
      "superClass": [
        "Gateway"
      ]
    },
    {
      "name": "RootElement",
      "isAbstract": true,
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "Relationship",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "type",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "direction",
          "type": "RelationshipDirection",
          "isAttr": true
        },
        {
          "name": "sources",
          "association": "A_sources_relationship",
          "isMany": true,
          "isReference": true,
          "type": "Element"
        },
        {
          "name": "targets",
          "association": "A_targets_relationship",
          "isMany": true,
          "isReference": true,
          "type": "Element"
        }
      ]
    },
    {
      "name": "BaseElement",
      "isAbstract": true,
      "properties": [
        {
          "name": "id",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "extensionDefinitions",
          "type": "ExtensionDefinition",
          "association": "A_extensionDefinitions_baseElement",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "extensionElements",
          "type": "ExtensionElements",
          "association": "A_extensionElements_baseElement"
        },
        {
          "name": "documentation",
          "type": "Documentation",
          "association": "A_documentation_baseElement",
          "isMany": true
        }
      ]
    },
    {
      "name": "Extension",
      "properties": [
        {
          "name": "mustUnderstand",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "definition",
          "type": "ExtensionDefinition",
          "association": "A_definition_extension"
        }
      ]
    },
    {
      "name": "ExtensionDefinition",
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "extensionAttributeDefinitions",
          "type": "ExtensionAttributeDefinition",
          "association": "A_extensionAttributeDefinitions_extensionDefinition",
          "isMany": true
        }
      ]
    },
    {
      "name": "ExtensionAttributeDefinition",
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "type",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "isReference",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "extensionDefinition",
          "type": "ExtensionDefinition",
          "association": "A_extensionAttributeDefinitions_extensionDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ExtensionElements",
      "properties": [
        {
          "name": "valueRef",
          "association": "A_valueRef_extensionElements",
          "isAttr": true,
          "isReference": true,
          "type": "Element"
        },
        {
          "name": "values",
          "association": "A_value_extensionElements",
          "type": "Element",
          "isMany": true
        },
        {
          "name": "extensionAttributeDefinition",
          "type": "ExtensionAttributeDefinition",
          "association": "A_extensionAttributeDefinition_extensionElements",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Documentation",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "text",
          "isAttr": true,
          "type": "String",
          "isBody": true
        },
        {
          "name": "textFormat",
          "default": "text/plain",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Event",
      "isAbstract": true,
      "superClass": [
        "FlowNode",
        "InteractionNode"
      ],
      "properties": [
        {
          "name": "properties",
          "type": "Property",
          "association": "A_properties_event",
          "isMany": true
        }
      ]
    },
    {
      "name": "IntermediateCatchEvent",
      "superClass": [
        "CatchEvent"
      ]
    },
    {
      "name": "IntermediateThrowEvent",
      "superClass": [
        "ThrowEvent"
      ]
    },
    {
      "name": "EndEvent",
      "superClass": [
        "ThrowEvent"
      ]
    },
    {
      "name": "StartEvent",
      "superClass": [
        "CatchEvent"
      ],
      "properties": [
        {
          "name": "isInterrupting",
          "default": true,
          "isAttr": true,
          "type": "Boolean"
        }
      ]
    },
    {
      "name": "ThrowEvent",
      "isAbstract": true,
      "superClass": [
        "Event"
      ],
      "properties": [
        {
          "name": "inputSet",
          "type": "InputSet",
          "association": "A_inputSet_throwEvent"
        },
        {
          "name": "eventDefinitionRefs",
          "type": "EventDefinition",
          "association": "A_eventDefinitionRefs_throwEvent",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "dataInputAssociation",
          "type": "DataInputAssociation",
          "association": "A_dataInputAssociation_throwEvent",
          "isMany": true
        },
        {
          "name": "dataInputs",
          "type": "DataInput",
          "association": "A_dataInputs_throwEvent",
          "isMany": true
        },
        {
          "name": "eventDefinitions",
          "type": "EventDefinition",
          "association": "A_eventDefinitions_throwEvent",
          "isMany": true
        }
      ]
    },
    {
      "name": "CatchEvent",
      "isAbstract": true,
      "superClass": [
        "Event"
      ],
      "properties": [
        {
          "name": "parallelMultiple",
          "isAttr": true,
          "type": "Boolean",
          "default": false
        },
        {
          "name": "outputSet",
          "type": "OutputSet",
          "association": "A_outputSet_catchEvent"
        },
        {
          "name": "eventDefinitionRefs",
          "type": "EventDefinition",
          "association": "A_eventDefinitionRefs_catchEvent",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "dataOutputAssociation",
          "type": "DataOutputAssociation",
          "association": "A_dataOutputAssociation_catchEvent",
          "isMany": true
        },
        {
          "name": "dataOutputs",
          "type": "DataOutput",
          "association": "A_dataOutputs_catchEvent",
          "isMany": true
        },
        {
          "name": "eventDefinitions",
          "type": "EventDefinition",
          "association": "A_eventDefinitions_catchEvent",
          "isMany": true
        }
      ]
    },
    {
      "name": "BoundaryEvent",
      "superClass": [
        "CatchEvent"
      ],
      "properties": [
        {
          "name": "cancelActivity",
          "default": true,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "attachedToRef",
          "type": "Activity",
          "association": "A_boundaryEventRefs_attachedToRef",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "EventDefinition",
      "isAbstract": true,
      "superClass": [
        "RootElement"
      ]
    },
    {
      "name": "CancelEventDefinition",
      "superClass": [
        "EventDefinition"
      ]
    },
    {
      "name": "ErrorEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "errorRef",
          "type": "Error",
          "association": "A_errorRef_errorEventDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "TerminateEventDefinition",
      "superClass": [
        "EventDefinition"
      ]
    },
    {
      "name": "EscalationEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "escalationRef",
          "type": "Escalation",
          "association": "A_escalationRef_escalationEventDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Escalation",
      "properties": [
        {
          "name": "structureRef",
          "type": "ItemDefinition",
          "association": "A_structureRef_escalation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "escalationCode",
          "isAttr": true,
          "type": "String"
        }
      ],
      "superClass": [
        "RootElement"
      ]
    },
    {
      "name": "CompensateEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "waitForCompletion",
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "activityRef",
          "type": "Activity",
          "association": "A_activityRef_compensateEventDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "TimerEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "timeDate",
          "type": "Expression",
          "association": "A_timeDate_timerEventDefinition"
        },
        {
          "name": "timeCycle",
          "type": "Expression",
          "association": "A_timeCycle_timerEventDefinition"
        },
        {
          "name": "timeDuration",
          "type": "Expression",
          "association": "A_timeDuration_timerEventDefinition"
        }
      ]
    },
    {
      "name": "LinkEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "target",
          "type": "LinkEventDefinition",
          "association": "A_target_source",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "source",
          "type": "LinkEventDefinition",
          "association": "A_target_source",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "MessageEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "messageRef",
          "type": "Message",
          "association": "A_messageRef_messageEventDefinition",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "operationRef",
          "type": "Operation",
          "association": "A_operationRef_messageEventDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ConditionalEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "condition",
          "type": "Expression",
          "association": "A_condition_conditionalEventDefinition",
          "serialize": "xsi:type"
        }
      ]
    },
    {
      "name": "SignalEventDefinition",
      "superClass": [
        "EventDefinition"
      ],
      "properties": [
        {
          "name": "signalRef",
          "type": "Signal",
          "association": "A_signalRef_signalEventDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Signal",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "structureRef",
          "type": "ItemDefinition",
          "association": "A_structureRef_signal",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ImplicitThrowEvent",
      "superClass": [
        "ThrowEvent"
      ]
    },
    {
      "name": "DataState",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ItemAwareElement",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "itemSubjectRef",
          "type": "ItemDefinition",
          "association": "A_itemSubjectRef_itemAwareElement",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "dataState",
          "type": "DataState",
          "association": "A_dataState_itemAwareElement"
        }
      ]
    },
    {
      "name": "DataAssociation",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "transformation",
          "type": "FormalExpression",
          "association": "A_transformation_dataAssociation"
        },
        {
          "name": "assignment",
          "type": "Assignment",
          "association": "A_assignment_dataAssociation",
          "isMany": true
        },
        {
          "name": "sourceRef",
          "type": "ItemAwareElement",
          "association": "A_sourceRef_dataAssociation",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "targetRef",
          "type": "ItemAwareElement",
          "association": "A_targetRef_dataAssociation",
          "isReference": true
        }
      ]
    },
    {
      "name": "DataInput",
      "superClass": [
        "ItemAwareElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "isCollection",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "inputSetRefs",
          "type": "InputSet",
          "association": "A_dataInputRefs_inputSetRefs",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        },
        {
          "name": "inputSetWithOptional",
          "type": "InputSet",
          "association": "A_optionalInputRefs_inputSetWithOptional",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        },
        {
          "name": "inputSetWithWhileExecuting",
          "type": "InputSet",
          "association": "A_whileExecutingInputRefs_inputSetWithWhileExecuting",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "DataOutput",
      "superClass": [
        "ItemAwareElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "isCollection",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "outputSetRefs",
          "type": "OutputSet",
          "association": "A_dataOutputRefs_outputSetRefs",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        },
        {
          "name": "outputSetWithOptional",
          "type": "OutputSet",
          "association": "A_outputSetWithOptional_optionalOutputRefs",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        },
        {
          "name": "outputSetWithWhileExecuting",
          "type": "OutputSet",
          "association": "A_outputSetWithWhileExecuting_whileExecutingOutputRefs",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "InputSet",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "dataInputRefs",
          "type": "DataInput",
          "association": "A_dataInputRefs_inputSetRefs",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "optionalInputRefs",
          "type": "DataInput",
          "association": "A_optionalInputRefs_inputSetWithOptional",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "whileExecutingInputRefs",
          "type": "DataInput",
          "association": "A_whileExecutingInputRefs_inputSetWithWhileExecuting",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "outputSetRefs",
          "type": "OutputSet",
          "association": "A_inputSetRefs_outputSetRefs",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "OutputSet",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "dataOutputRefs",
          "type": "DataOutput",
          "association": "A_dataOutputRefs_outputSetRefs",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "inputSetRefs",
          "type": "InputSet",
          "association": "A_inputSetRefs_outputSetRefs",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "optionalOutputRefs",
          "type": "DataOutput",
          "association": "A_outputSetWithOptional_optionalOutputRefs",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "whileExecutingOutputRefs",
          "type": "DataOutput",
          "association": "A_outputSetWithWhileExecuting_whileExecutingOutputRefs",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Property",
      "superClass": [
        "ItemAwareElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "DataInputAssociation",
      "superClass": [
        "DataAssociation"
      ]
    },
    {
      "name": "DataOutputAssociation",
      "superClass": [
        "DataAssociation"
      ]
    },
    {
      "name": "InputOutputSpecification",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "inputSets",
          "type": "InputSet",
          "association": "A_inputSets_inputOutputSpecification",
          "isMany": true
        },
        {
          "name": "outputSets",
          "type": "OutputSet",
          "association": "A_outputSets_inputOutputSpecification",
          "isMany": true
        },
        {
          "name": "dataInputs",
          "type": "DataInput",
          "association": "A_dataInputs_inputOutputSpecification",
          "isMany": true
        },
        {
          "name": "dataOutputs",
          "type": "DataOutput",
          "association": "A_dataOutputs_inputOutputSpecification",
          "isMany": true
        }
      ]
    },
    {
      "name": "DataObject",
      "superClass": [
        "FlowElement",
        "ItemAwareElement"
      ],
      "properties": [
        {
          "name": "isCollection",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        }
      ]
    },
    {
      "name": "InputOutputBinding",
      "properties": [
        {
          "name": "inputDataRef",
          "type": "InputSet",
          "association": "A_inputDataRef_inputOutputBinding",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "outputDataRef",
          "type": "OutputSet",
          "association": "A_outputDataRef_inputOutputBinding",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "operationRef",
          "type": "Operation",
          "association": "A_operationRef_ioBinding",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Assignment",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "from",
          "type": "Expression",
          "association": "A_from_assignment"
        },
        {
          "name": "to",
          "type": "Expression",
          "association": "A_to_assignment"
        }
      ]
    },
    {
      "name": "DataStore",
      "superClass": [
        "RootElement",
        "ItemAwareElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "capacity",
          "isAttr": true,
          "type": "Integer"
        },
        {
          "name": "isUnlimited",
          "default": true,
          "isAttr": true,
          "type": "Boolean"
        }
      ]
    },
    {
      "name": "DataStoreReference",
      "superClass": [
        "ItemAwareElement",
        "FlowElement"
      ],
      "properties": [
        {
          "name": "dataStoreRef",
          "type": "DataStore",
          "association": "A_dataStoreRef_dataStoreReference",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "DataObjectReference",
      "superClass": [
        "ItemAwareElement",
        "FlowElement"
      ],
      "properties": [
        {
          "name": "dataObjectRef",
          "type": "DataObject",
          "association": "A_dataObjectRef_dataObject",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ConversationLink",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "sourceRef",
          "type": "InteractionNode",
          "association": "A_sourceRef_outgoingConversationLinks",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "targetRef",
          "type": "InteractionNode",
          "association": "A_targetRef_incomingConversationLinks",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ConversationAssociation",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "innerConversationNodeRef",
          "type": "ConversationNode",
          "association": "A_innerConversationNodeRef_conversationAssociation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "outerConversationNodeRef",
          "type": "ConversationNode",
          "association": "A_outerConversationNodeRef_conversationAssociation",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "CallConversation",
      "superClass": [
        "ConversationNode"
      ],
      "properties": [
        {
          "name": "calledCollaborationRef",
          "type": "Collaboration",
          "association": "A_calledCollaborationRef_callConversation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "participantAssociations",
          "type": "ParticipantAssociation",
          "association": "A_participantAssociations_callConversation",
          "isMany": true
        }
      ]
    },
    {
      "name": "Conversation",
      "superClass": [
        "ConversationNode"
      ]
    },
    {
      "name": "SubConversation",
      "superClass": [
        "ConversationNode"
      ],
      "properties": [
        {
          "name": "conversationNodes",
          "type": "ConversationNode",
          "association": "A_conversationNodes_subConversation",
          "isMany": true
        }
      ]
    },
    {
      "name": "ConversationNode",
      "isAbstract": true,
      "superClass": [
        "InteractionNode",
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "participantRefs",
          "type": "Participant",
          "association": "A_participantRefs_conversationNode",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "messageFlowRefs",
          "type": "MessageFlow",
          "association": "A_messageFlowRefs_communication",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "correlationKeys",
          "type": "CorrelationKey",
          "association": "A_correlationKeys_conversationNode",
          "isMany": true
        }
      ]
    },
    {
      "name": "GlobalConversation",
      "superClass": [
        "Collaboration"
      ]
    },
    {
      "name": "PartnerEntity",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "participantRef",
          "type": "Participant",
          "association": "A_partnerEntityRef_participantRef",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "PartnerRole",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "participantRef",
          "type": "Participant",
          "association": "A_partnerRoleRef_participantRef",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "CorrelationProperty",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "correlationPropertyRetrievalExpression",
          "type": "CorrelationPropertyRetrievalExpression",
          "association": "A_correlationPropertyRetrievalExpression_correlationproperty",
          "isMany": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "type",
          "type": "ItemDefinition",
          "association": "A_type_correlationProperty",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Error",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "structureRef",
          "type": "ItemDefinition",
          "association": "A_structureRef_error",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "errorCode",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "CorrelationKey",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "correlationPropertyRef",
          "type": "CorrelationProperty",
          "association": "A_correlationPropertyRef_correlationKey",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Expression",
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "FormalExpression",
      "superClass": [
        "Expression"
      ],
      "properties": [
        {
          "name": "language",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "body",
          "type": "Element"
        },
        {
          "name": "evaluatesToTypeRef",
          "type": "ItemDefinition",
          "association": "A_evaluatesToTypeRef_formalExpression",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Message",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "itemRef",
          "type": "ItemDefinition",
          "association": "A_itemRef_message",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ItemDefinition",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "itemKind",
          "type": "ItemKind",
          "isAttr": true
        },
        {
          "name": "structureRef",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "isCollection",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "import",
          "type": "Import",
          "association": "A_import_itemDefinition",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "FlowElement",
      "isAbstract": true,
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "auditing",
          "type": "Auditing",
          "association": "A_auditing_flowElement"
        },
        {
          "name": "monitoring",
          "type": "Monitoring",
          "association": "A_monitoring_flowElement"
        },
        {
          "name": "categoryValueRef",
          "type": "CategoryValue",
          "association": "A_categorizedFlowElements_categoryValueRef",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "SequenceFlow",
      "superClass": [
        "FlowElement"
      ],
      "properties": [
        {
          "name": "isImmediate",
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "conditionExpression",
          "type": "Expression",
          "association": "A_conditionExpression_sequenceFlow"
        },
        {
          "name": "sourceRef",
          "type": "FlowNode",
          "association": "A_sourceRef_outgoing_flow",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "targetRef",
          "type": "FlowNode",
          "association": "A_targetRef_incoming_flow",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "FlowElementsContainer",
      "isAbstract": true,
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "laneSets",
          "type": "LaneSet",
          "association": "A_laneSets_flowElementsContainer",
          "isMany": true
        },
        {
          "name": "flowElements",
          "type": "FlowElement",
          "association": "A_flowElements_container",
          "isMany": true
        }
      ]
    },
    {
      "name": "CallableElement",
      "isAbstract": true,
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "ioSpecification",
          "type": "InputOutputSpecification",
          "association": "A_ioSpecification_callableElement"
        },
        {
          "name": "supportedInterfaceRefs",
          "type": "Interface",
          "association": "A_supportedInterfaceRefs_callableElements",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "ioBinding",
          "type": "InputOutputBinding",
          "association": "A_ioBinding_callableElement",
          "isMany": true
        }
      ]
    },
    {
      "name": "FlowNode",
      "isAbstract": true,
      "superClass": [
        "FlowElement"
      ],
      "properties": [
        {
          "name": "incoming",
          "type": "SequenceFlow",
          "association": "A_targetRef_incoming_flow",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "outgoing",
          "type": "SequenceFlow",
          "association": "A_sourceRef_outgoing_flow",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "lanes",
          "type": "Lane",
          "association": "A_flowNodeRefs_lanes",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "CorrelationPropertyRetrievalExpression",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "messagePath",
          "type": "FormalExpression",
          "association": "A_messagePath_correlationset"
        },
        {
          "name": "messageRef",
          "type": "Message",
          "association": "A_messageRef_correlationPropertyRetrievalExpression",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "CorrelationPropertyBinding",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "dataPath",
          "type": "FormalExpression",
          "association": "A_dataPath_correlationPropertyBinding"
        },
        {
          "name": "correlationPropertyRef",
          "type": "CorrelationProperty",
          "association": "A_correlationPropertyRef_correlationPropertyBinding",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Resource",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "resourceParameters",
          "type": "ResourceParameter",
          "association": "A_resourceParameters_resource",
          "isMany": true
        }
      ]
    },
    {
      "name": "ResourceParameter",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "isRequired",
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "type",
          "type": "ItemDefinition",
          "association": "A_type_resourceParameter",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "CorrelationSubscription",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "correlationKeyRef",
          "type": "CorrelationKey",
          "association": "A_correlationKeyRef_correlationSubscription",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "correlationPropertyBinding",
          "type": "CorrelationPropertyBinding",
          "association": "A_correlationPropertyBinding_correlationSubscription",
          "isMany": true
        }
      ]
    },
    {
      "name": "MessageFlow",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "sourceRef",
          "type": "InteractionNode",
          "association": "A_sourceRef_messageFlow",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "targetRef",
          "type": "InteractionNode",
          "association": "A_targetRef_messageFlow",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "messageRef",
          "type": "Message",
          "association": "A_messageRef_messageFlow",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "MessageFlowAssociation",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "innerMessageFlowRef",
          "type": "MessageFlow",
          "association": "A_innerMessageFlowRef_messageFlowAssociation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "outerMessageFlowRef",
          "type": "MessageFlow",
          "association": "A_outerMessageFlowRef_messageFlowAssociation",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "InteractionNode",
      "isAbstract": true,
      "properties": [
        {
          "name": "incomingConversationLinks",
          "type": "ConversationLink",
          "association": "A_targetRef_incomingConversationLinks",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        },
        {
          "name": "outgoingConversationLinks",
          "type": "ConversationLink",
          "association": "A_sourceRef_outgoingConversationLinks",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Participant",
      "superClass": [
        "InteractionNode",
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "interfaceRefs",
          "type": "Interface",
          "association": "A_interfaceRefs_participant",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "participantMultiplicity",
          "type": "ParticipantMultiplicity",
          "association": "A_participantMultiplicity_participant"
        },
        {
          "name": "endPointRefs",
          "type": "EndPoint",
          "association": "A_endPointRefs_participant",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "processRef",
          "type": "Process",
          "association": "A_processRef_participant",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ParticipantAssociation",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "innerParticipantRef",
          "type": "Participant",
          "association": "A_innerParticipantRef_participantAssociation",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "outerParticipantRef",
          "type": "Participant",
          "association": "A_outerParticipantRef_participantAssociation",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ParticipantMultiplicity",
      "properties": [
        {
          "name": "minimum",
          "default": 0,
          "isAttr": true,
          "type": "Integer"
        },
        {
          "name": "maximum",
          "default": 1,
          "isAttr": true,
          "type": "Integer"
        }
      ]
    },
    {
      "name": "Collaboration",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "isClosed",
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "choreographyRef",
          "type": "Choreography",
          "association": "A_choreographyRef_collaboration",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "artifacts",
          "type": "Artifact",
          "association": "A_artifacts_collaboration",
          "isMany": true
        },
        {
          "name": "participantAssociations",
          "type": "ParticipantAssociation",
          "association": "A_participantAssociations_collaboration",
          "isMany": true
        },
        {
          "name": "messageFlowAssociations",
          "type": "MessageFlowAssociation",
          "association": "A_messageFlowAssociations_collaboration",
          "isMany": true
        },
        {
          "name": "conversationAssociations",
          "type": "ConversationAssociation",
          "association": "A_conversationAssociations_converstaionAssociations"
        },
        {
          "name": "participants",
          "type": "Participant",
          "association": "A_participants_collaboration",
          "isMany": true
        },
        {
          "name": "messageFlows",
          "type": "MessageFlow",
          "association": "A_messageFlows_collaboration",
          "isMany": true
        },
        {
          "name": "correlationKeys",
          "type": "CorrelationKey",
          "association": "A_correlationKeys_collaboration",
          "isMany": true
        },
        {
          "name": "conversations",
          "type": "ConversationNode",
          "association": "A_conversations_collaboration",
          "isMany": true
        },
        {
          "name": "conversationLinks",
          "type": "ConversationLink",
          "association": "A_conversationLinks_collaboration",
          "isMany": true
        }
      ]
    },
    {
      "name": "ChoreographyActivity",
      "isAbstract": true,
      "superClass": [
        "FlowNode"
      ],
      "properties": [
        {
          "name": "participantRefs",
          "type": "Participant",
          "association": "A_participantRefs_choreographyActivity",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "initiatingParticipantRef",
          "type": "Participant",
          "association": "A_initiatingParticipantRef_choreographyActivity",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "correlationKeys",
          "type": "CorrelationKey",
          "association": "A_correlationKeys_choreographyActivity",
          "isMany": true
        },
        {
          "name": "loopType",
          "type": "ChoreographyLoopType",
          "default": "None",
          "isAttr": true
        }
      ]
    },
    {
      "name": "CallChoreography",
      "superClass": [
        "ChoreographyActivity"
      ],
      "properties": [
        {
          "name": "calledChoreographyRef",
          "type": "Choreography",
          "association": "A_calledChoreographyRef_callChoreographyActivity",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "participantAssociations",
          "type": "ParticipantAssociation",
          "association": "A_participantAssociations_callChoreographyActivity",
          "isMany": true
        }
      ]
    },
    {
      "name": "SubChoreography",
      "superClass": [
        "ChoreographyActivity",
        "FlowElementsContainer"
      ],
      "properties": [
        {
          "name": "artifacts",
          "type": "Artifact",
          "association": "A_artifacts_subChoreography",
          "isMany": true
        }
      ]
    },
    {
      "name": "ChoreographyTask",
      "superClass": [
        "ChoreographyActivity"
      ],
      "properties": [
        {
          "name": "messageFlowRef",
          "type": "MessageFlow",
          "association": "A_messageFlowRef_choreographyTask",
          "isMany": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Choreography",
      "superClass": [
        "FlowElementsContainer",
        "Collaboration"
      ]
    },
    {
      "name": "GlobalChoreographyTask",
      "superClass": [
        "Choreography"
      ],
      "properties": [
        {
          "name": "initiatingParticipantRef",
          "type": "Participant",
          "association": "A_initiatingParticipantRef_globalChoreographyTask",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "TextAnnotation",
      "superClass": [
        "Artifact"
      ],
      "properties": [
        {
          "name": "text",
          "type": "String"
        },
        {
          "name": "textFormat",
          "default": "text/plain",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Group",
      "superClass": [
        "Artifact"
      ],
      "properties": [
        {
          "name": "categoryValueRef",
          "type": "CategoryValue",
          "association": "A_categoryValueRef_categoryValueRef",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Association",
      "superClass": [
        "Artifact"
      ],
      "properties": [
        {
          "name": "associationDirection",
          "type": "AssociationDirection",
          "isAttr": true
        },
        {
          "name": "sourceRef",
          "type": "BaseElement",
          "association": "A_sourceRef_outgoing_association",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "targetRef",
          "type": "BaseElement",
          "association": "A_targetRef_incoming_association",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "Category",
      "superClass": [
        "RootElement"
      ],
      "properties": [
        {
          "name": "categoryValue",
          "type": "CategoryValue",
          "association": "A_categoryValue_category",
          "isMany": true
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Artifact",
      "isAbstract": true,
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "CategoryValue",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "categorizedFlowElements",
          "type": "FlowElement",
          "association": "A_categorizedFlowElements_categoryValueRef",
          "isVirtual": true,
          "isMany": true,
          "isReference": true
        },
        {
          "name": "value",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Activity",
      "isAbstract": true,
      "superClass": [
        "FlowNode"
      ],
      "properties": [
        {
          "name": "isForCompensation",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "loopCharacteristics",
          "type": "LoopCharacteristics",
          "association": "A_loopCharacteristics_activity"
        },
        {
          "name": "resources",
          "type": "ResourceRole",
          "association": "A_resources_activity",
          "isMany": true
        },
        {
          "name": "default",
          "type": "SequenceFlow",
          "association": "A_default_activity",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "properties",
          "type": "Property",
          "association": "A_properties_activity",
          "isMany": true
        },
        {
          "name": "ioSpecification",
          "type": "InputOutputSpecification",
          "association": "A_ioSpecification_activity"
        },
        {
          "name": "boundaryEventRefs",
          "type": "BoundaryEvent",
          "association": "A_boundaryEventRefs_attachedToRef",
          "isMany": true,
          "isReference": true
        },
        {
          "name": "dataInputAssociations",
          "type": "DataInputAssociation",
          "association": "A_dataInputAssociations_activity",
          "isMany": true
        },
        {
          "name": "dataOutputAssociations",
          "type": "DataOutputAssociation",
          "association": "A_dataOutputAssociations_activity",
          "isMany": true
        },
        {
          "name": "startQuantity",
          "default": 1,
          "isAttr": true,
          "type": "Integer"
        },
        {
          "name": "completionQuantity",
          "default": 1,
          "isAttr": true,
          "type": "Integer"
        }
      ]
    },
    {
      "name": "ServiceTask",
      "superClass": [
        "Task"
      ],
      "properties": [
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "operationRef",
          "type": "Operation",
          "association": "A_operationRef_serviceTask",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "camunda:asyncBefore",
          "type": "String",
          "isAttr": true
        },
        {
          "name": "camunda:expression",
          "type": "String",
          "isAttr": true
        }
      ]
    },
    {
      "name": "SubProcess",
      "superClass": [
        "Activity",
        "FlowElementsContainer"
      ],
      "properties": [
        {
          "name": "triggeredByEvent",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "artifacts",
          "type": "Artifact",
          "association": "A_artifacts_subProcess",
          "isMany": true
        }
      ]
    },
    {
      "name": "LoopCharacteristics",
      "isAbstract": true,
      "superClass": [
        "BaseElement"
      ]
    },
    {
      "name": "MultiInstanceLoopCharacteristics",
      "superClass": [
        "LoopCharacteristics"
      ],
      "properties": [
        {
          "name": "isSequential",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "camunda:collection",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "behavior",
          "type": "MultiInstanceBehavior",
          "default": "All",
          "isAttr": true
        },
        {
          "name": "loopCardinality",
          "type": "Expression",
          "association": "A_loopCardinality_multiInstanceLoopCharacteristics"
        },
        {
          "name": "loopDataInputRef",
          "type": "ItemAwareElement",
          "association": "A_loopDataInputRef_multiInstanceLoopCharacteristics",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "loopDataOutputRef",
          "type": "ItemAwareElement",
          "association": "A_loopDataOutputRef_multiInstanceLoopCharacteristics",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "inputDataItem",
          "type": "DataInput",
          "association": "A_inputDataItem_multiInstanceLoopCharacteristics"
        },
        {
          "name": "outputDataItem",
          "type": "DataOutput",
          "association": "A_outputDataItem_multiInstanceLoopCharacteristics"
        },
        {
          "name": "completionCondition",
          "type": "Expression",
          "association": "A_completionCondition_multiInstanceLoopCharacteristics"
        },
        {
          "name": "complexBehaviorDefinition",
          "type": "ComplexBehaviorDefinition",
          "association": "A_complexBehaviorDefinition_multiInstanceLoopCharacteristics",
          "isMany": true
        },
        {
          "name": "oneBehaviorEventRef",
          "type": "EventDefinition",
          "association": "A_oneBehaviorEventRef_multiInstanceLoopCharacteristics",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "noneBehaviorEventRef",
          "type": "EventDefinition",
          "association": "A_noneBehaviorEventRef_multiInstanceLoopCharacteristics",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "StandardLoopCharacteristics",
      "superClass": [
        "LoopCharacteristics"
      ],
      "properties": [
        {
          "name": "testBefore",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "loopCondition",
          "type": "Expression",
          "association": "A_loopCondition_standardLoopCharacteristics"
        },
        {
          "name": "loopMaximum",
          "type": "Expression",
          "association": "A_loopMaximum_standardLoopCharacteristics"
        }
      ]
    },
    {
      "name": "CallActivity",
      "superClass": [
        "Activity"
      ],
      "properties": [
        {
          "name": "calledElement",
          "type": "String",
          "association": "A_calledElementRef_callActivity",
          "isAttr": true
        }
      ]
    },
    {
      "name": "Task",
      "superClass": [
        "Activity",
        "InteractionNode"
      ]
    },
    {
      "name": "SendTask",
      "superClass": [
        "Task"
      ],
      "properties": [
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "operationRef",
          "type": "Operation",
          "association": "A_operationRef_sendTask",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "messageRef",
          "type": "Message",
          "association": "A_messageRef_sendTask",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ReceiveTask",
      "superClass": [
        "Task"
      ],
      "properties": [
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "instantiate",
          "default": false,
          "isAttr": true,
          "type": "Boolean"
        },
        {
          "name": "operationRef",
          "type": "Operation",
          "association": "A_operationRef_receiveTask",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "messageRef",
          "type": "Message",
          "association": "A_messageRef_receiveTask",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ScriptTask",
      "superClass": [
        "Task"
      ],
      "properties": [
        {
          "name": "scriptFormat",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "script",
          "type": "String"
        }
      ]
    },
    {
      "name": "BusinessRuleTask",
      "superClass": [
        "Task"
      ],
      "properties": [
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "AdHocSubProcess",
      "superClass": [
        "SubProcess"
      ],
      "properties": [
        {
          "name": "completionCondition",
          "type": "Expression",
          "association": "A_completionCondition_adHocSubProcess"
        },
        {
          "name": "ordering",
          "type": "AdHocOrdering",
          "isAttr": true
        },
        {
          "name": "cancelRemainingInstances",
          "default": true,
          "isAttr": true,
          "type": "Boolean"
        }
      ]
    },
    {
      "name": "Transaction",
      "superClass": [
        "SubProcess"
      ],
      "properties": [
        {
          "name": "protocol",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "method",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "GlobalScriptTask",
      "superClass": [
        "GlobalTask"
      ],
      "properties": [
        {
          "name": "scriptLanguage",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "script",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "GlobalBusinessRuleTask",
      "superClass": [
        "GlobalTask"
      ],
      "properties": [
        {
          "name": "implementation",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ComplexBehaviorDefinition",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "condition",
          "type": "FormalExpression",
          "association": "A_condition_complexBehaviorDefinition"
        },
        {
          "name": "event",
          "type": "ImplicitThrowEvent",
          "association": "A_event_complexBehaviorDefinition"
        }
      ]
    },
    {
      "name": "ResourceRole",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "resourceRef",
          "type": "Resource",
          "association": "A_resourceRef_activityResource",
          "isAttr": true,
          "isReference": true
        },
        {
          "name": "resourceParameterBindings",
          "type": "ResourceParameterBinding",
          "association": "A_resourceParameterBindings_activityResource",
          "isMany": true
        },
        {
          "name": "resourceAssignmentExpression",
          "type": "ResourceAssignmentExpression",
          "association": "A_resourceAssignmentExpression_activityResource"
        },
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "ResourceParameterBinding",
      "properties": [
        {
          "name": "expression",
          "type": "Expression",
          "association": "A_expression_resourceParameterBinding"
        },
        {
          "name": "parameterRef",
          "type": "ResourceParameter",
          "association": "A_parameterRef_resourceParameterBinding",
          "isAttr": true,
          "isReference": true
        }
      ]
    },
    {
      "name": "ResourceAssignmentExpression",
      "properties": [
        {
          "name": "expression",
          "type": "Expression",
          "association": "A_expression_resourceAssignmentExpression"
        }
      ]
    },
    {
      "name": "Import",
      "properties": [
        {
          "name": "importType",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "location",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "namespace",
          "isAttr": true,
          "type": "String"
        }
      ]
    },
    {
      "name": "Definitions",
      "superClass": [
        "BaseElement"
      ],
      "properties": [
        {
          "name": "name",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "targetNamespace",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "expressionLanguage",
          "default": "http://www.w3.org/1999/XPath",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "typeLanguage",
          "default": "http://www.w3.org/2001/XMLSchema",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "imports",
          "type": "Import",
          "association": "A_imports_definition",
          "isMany": true
        },
        {
          "name": "extensions",
          "type": "Extension",
          "association": "A_extensions_definitions",
          "isMany": true
        },
        {
          "name": "relationships",
          "type": "Relationship",
          "association": "A_relationships_definition",
          "isMany": true
        },
        {
          "name": "rootElements",
          "type": "RootElement",
          "association": "A_rootElements_definition",
          "isMany": true
        },
        {
          "name": "diagrams",
          "association": "A_diagrams_definitions",
          "isMany": true,
          "type": "bpmndi:BPMNDiagram"
        },
        {
          "name": "exporter",
          "isAttr": true,
          "type": "String"
        },
        {
          "name": "exporterVersion",
          "isAttr": true,
          "type": "String"
        }
      ]
    }
  ],
  "emumerations": [
    {
      "name": "ProcessType",
      "literalValues": [
        {
          "name": "None"
        },
        {
          "name": "Public"
        },
        {
          "name": "Private"
        }
      ]
    },
    {
      "name": "GatewayDirection",
      "literalValues": [
        {
          "name": "Unspecified"
        },
        {
          "name": "Converging"
        },
        {
          "name": "Diverging"
        },
        {
          "name": "Mixed"
        }
      ]
    },
    {
      "name": "EventBasedGatewayType",
      "literalValues": [
        {
          "name": "Parallel"
        },
        {
          "name": "Exclusive"
        }
      ]
    },
    {
      "name": "RelationshipDirection",
      "literalValues": [
        {
          "name": "None"
        },
        {
          "name": "Forward"
        },
        {
          "name": "Backward"
        },
        {
          "name": "Both"
        }
      ]
    },
    {
      "name": "ItemKind",
      "literalValues": [
        {
          "name": "Physical"
        },
        {
          "name": "Information"
        }
      ]
    },
    {
      "name": "ChoreographyLoopType",
      "literalValues": [
        {
          "name": "None"
        },
        {
          "name": "Standard"
        },
        {
          "name": "MultiInstanceSequential"
        },
        {
          "name": "MultiInstanceParallel"
        }
      ]
    },
    {
      "name": "AssociationDirection",
      "literalValues": [
        {
          "name": "None"
        },
        {
          "name": "One"
        },
        {
          "name": "Both"
        }
      ]
    },
    {
      "name": "MultiInstanceBehavior",
      "literalValues": [
        {
          "name": "None"
        },
        {
          "name": "One"
        },
        {
          "name": "All"
        },
        {
          "name": "Complex"
        }
      ]
    },
    {
      "name": "AdHocOrdering",
      "literalValues": [
        {
          "name": "Parallel"
        },
        {
          "name": "Sequential"
        }
      ]
    }
  ],
  "prefix": "bpmn",
  "xml": {
    "alias": "lowerCase"
  }
}