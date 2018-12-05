
/**
  * A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model.
  * @typedef {Object} NIEMModelType 
  *
  * @property {string} [name] - A name of a model. 
  * @property {string} [summary] - A definition or summary statement of a model. 
  * @property {string} [description] - A detailed description of a model. 
  * @property {enum} [kind] - A kind of model. 
  * @property {string} [source] - An authoritative source for the model. 
  * @property {string} [contactInfo] - A set of contact information for the model. 
  * @property {string} [website] - A URL for an informational website about this model. 
  * @property {NIEMVersion[]} [versions] - A set of versions that belong to this model. 
  */


/** @type {NIEMModelType} */ 
let NIEMModel= {}; 


/**
  * A data type for metadata about model-related resources.
  * @typedef {Object} NIEMModelLinksType 
  *
  * @property {string} [id] - An identifier for a model. 
  * @property {string} [href] - A url for this model 
  * @property {object} [versions] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [versions.count] -  
  * @property {string} [versions.href] - A URI for the target resource. 
  */


/** @type {NIEMModelLinksType} */ 
let NIEMModelLinks= {}; 


/**
  * A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model.
  * @typedef {Object} NIEMModelsType 
  *
  * @property {string} [name] - A name of a model. 
  * @property {string} [summary] - A definition or summary statement of a model. 
  * @property {string} [description] - A detailed description of a model. 
  * @property {enum} [kind] - A kind of model. 
  * @property {string} [source] - An authoritative source for the model. 
  * @property {string} [contactInfo] - A set of contact information for the model. 
  * @property {string} [website] - A URL for an informational website about this model. 
  * @property {NIEMVersion[]} [versions] - A set of versions that belong to this model. 
  */


/** @type {NIEMModelsType} */ 
let NIEMModels= {}; 


/**
  * A data type for metadata about model-related resources.
  * @typedef {Object} NIEMModelsLinksType 
  *
  * @property {string} [id] - An identifier for a model. 
  * @property {string} [href] - A url for this model 
  * @property {object} [versions] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [versions.count] -  
  * @property {string} [versions.href] - A URI for the target resource. 
  */


/** @type {NIEMModelsLinksType} */ 
let NIEMModelsLinks= {}; 


/**
  * Represents a undefined object
  * @typedef {Object} NIEMModelResponseType 
  *
  * @property {string} [$schema] -  
  * @property {object} [data] - A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model. 
  * @property {string} [data.name] - A name of a model. 
  * @property {string} [data.summary] - A definition or summary statement of a model. 
  * @property {string} [data.description] - A detailed description of a model. 
  * @property {enum} [data.kind] - A kind of model. 
  * @property {string} [data.source] - An authoritative source for the model. 
  * @property {string} [data.contactInfo] - A set of contact information for the model. 
  * @property {string} [data.website] - A URL for an informational website about this model. 
  * @property {array} [data.versions] - A set of versions that belong to this model. 
  * @property {object} [links] - A data type for metadata about model-related resources. 
  * @property {string} [links.id] - An identifier for a model. 
  * @property {string} [links.href] - A url for this model 
  * @property {object} [links.versions] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [links.versions.count] -  
  * @property {string} [links.versions.href] - A URI for the target resource. 
  */


/** @type {NIEMModelResponseType} */ 
let NIEMModelResponse= {}; 


/**
  * Represents a undefined object
  * @typedef {Object} NIEMVersionResponseType 
  *
  * @property {string} [$schema] -  
  * @property {object} [data] - A data type for a specific set of versioned namespaces of a model. 
  * @property {string} [data.modelName] - A name of the model to which this version belongs. 
  * @property {string} [data.version] - A version number. 
  * @property {string} [data.draft] - A sub-version number, such as a pre-release identifier. 
  * @property {string} [data.baseNIEM] - A NIEM release that this resource is based on. 
  * @property {string} [data.uri] - A target namespace or other ID for this model version. 
  * @property {string} [data.changeSummary] - A summary of the changes from the previous version, if applicable. 
  * @property {string} [data.location] - A URL for the model version folder. 
  * @property {array} [data.conformanceTargets] - One or more classes of artifact to which this artifact conforms. 
  * @property {object} [data.more] - Any additional metadata to be captured. 
  * @property {object} [links] - A data type for metadata about version-related resources. 
  * @property {string} [links.href] - A URI for the target resource. 
  * @property {string} [links.zip] - The location of the zip file for this version. 
  * @property {string} [links.folder] - The folder location for this version. 
  * @property {object} [links.model] - A data type for metadata about a singular resource related to the source resource. 
  * @property {string} [links.model.label] - A relative label for a resource, such as a version number or a qualified name. 
  * @property {string} [links.model.href] - A URI for the target resource. 
  * @property {object} [links.namespaces] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [links.namespaces.count] -  
  * @property {string} [links.namespaces.href] - A URI for the target resource. 
  * @property {object} [links.properties] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [links.properties.count] -  
  * @property {string} [links.properties.href] - A URI for the target resource. 
  * @property {object} [links.types] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [links.types.count] -  
  * @property {string} [links.types.href] - A URI for the target resource. 
  * @property {object} [links.codes] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [links.codes.count] -  
  * @property {string} [links.codes.href] - A URI for the target resource. 
  */


/** @type {NIEMVersionResponseType} */ 
let NIEMVersionResponse= {}; 


/**
  * A data type for a specific set of versioned namespaces of a model.
  * @typedef {Object} NIEMVersionType 
  *
  * @property {string} [modelName] - A name of the model to which this version belongs. 
  * @property {string} [version] - A version number. 
  * @property {string} [draft] - A sub-version number, such as a pre-release identifier. 
  * @property {string} [baseNIEM] - A NIEM release that this resource is based on. 
  * @property {string} [uri] - A target namespace or other ID for this model version. 
  * @property {string} [changeSummary] - A summary of the changes from the previous version, if applicable. 
  * @property {string} [location] - A URL for the model version folder. 
  * @property {array} [conformanceTargets] - One or more classes of artifact to which this artifact conforms. 
  * @property {object} [more] - Any additional metadata to be captured. 
  */


/** @type {NIEMVersionType} */ 
let NIEMVersion= {}; 


/**
  * A data type for metadata about version-related resources.
  * @typedef {Object} NIEMVersionLinksType 
  *
  * @property {string} [href] - A URI for the target resource. 
  * @property {string} [zip] - The location of the zip file for this version. 
  * @property {string} [folder] - The folder location for this version. 
  * @property {object} [model] - A data type for metadata about a singular resource related to the source resource. 
  * @property {string} [model.label] - A relative label for a resource, such as a version number or a qualified name. 
  * @property {string} [model.href] - A URI for the target resource. 
  * @property {object} [namespaces] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [namespaces.count] -  
  * @property {string} [namespaces.href] - A URI for the target resource. 
  * @property {object} [properties] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [properties.count] -  
  * @property {string} [properties.href] - A URI for the target resource. 
  * @property {object} [types] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [types.count] -  
  * @property {string} [types.href] - A URI for the target resource. 
  * @property {object} [codes] - A data type for metadata about potentially multiple resources related to the source resource. 
  * @property {integer} [codes.count] -  
  * @property {string} [codes.href] - A URI for the target resource. 
  */


/** @type {NIEMVersionLinksType} */ 
let NIEMVersionLinks= {}; 


module.exports = {NIEMModel, NIEMModelLinks, NIEMModels, NIEMModelsLinks, NIEMModelResponse, NIEMVersionResponse, NIEMVersion, NIEMVersionLinks};