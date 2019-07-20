
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


/**
  * A data type for a specific set of versioned namespaces of a model.
  * @typedef {Object} NIEMVersionType
  *
  * @property {string} [id] - An identifier for a model.
  * @property {string} [href] - A url for this model
  * @property {object} [versions] - A data type for metadata about potentially multiple resources related to the source resource.
  * @property {integer} [versions.count] -
  * @property {string} [versions.href] - A URI for the target resource.
  */


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


/** @type {NIEMVersionType} */
let NIEMVersion= {};


/**
  * A data type for metadata about version-related resources.
  * @typedef {Object} NIEMVersionLinksType
  *
  * @property {string} [id] -
  * @property {string} [href] - A URI for the target resource.
  * @property {string} [zip] - The location of the zip file for this version.
  * @property {string} [folder] - The folder location for this version.
  * @property {object} [model] - A data type for metadata about a singular resource related to the source resource.
  * @property {string} [model.id] -
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