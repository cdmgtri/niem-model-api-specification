
let { NIEMModel, NIEMVersion } = require("niem-model-schema");


/**
  * Represents a undefined object
  * @typedef {Object} NIEMModelResponseType
  *
  * @property {string} [$schema] -
  * @property {NIEMModel} [data] - A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model.
  * @property {NIEMModelLinksType} [links] - A data type for metadata about model-related resources.
  */


/**
  * A data type for metadata about model-related resources.
  * @typedef {Object} NIEMModelLinksType
  *
  * @property {string} [id] - An identifier for a model.
  * @property {string} [href] - A URI for the target resource.
  * @property {NIEMVersionLinks} [versions] - A data type for metadata about a singular resource related to the source resource.
  */


/**
  * Represents a undefined object
  * @typedef {Object} NIEMVersionResponseType
  *
  * @property {string} [$schema] -
  * @property {NIEMVersion} [data] - A data type for a specific version or release of a model.
  * @property {NIEMVersionLinksType} [links] - A data type for metadata about version-related resources.
  */


/**
  * A data type for metadata about version-related resources.
  * @typedef {Object} NIEMVersionLinksType
  *
  * @property {string} [href] - A URI for the target resource.
  * @property {string} [zip] - The location of the zip file for this project.
  * @property {string} [folder] - The folder location for this version.
  * @property {NIEMRelatedResource} [model] - A data type for metadata about a singular resource related to the source resource.
  * @property {NIEMRelatedResources} [namespaces] - A data type for metadata about potentially multiple resources related to the source resource.
  * @property {NIEMRelatedResources} [properties] - A data type for metadata about potentially multiple resources related to the source resource.
  * @property {NIEMRelatedResources} [types] - A data type for metadata about potentially multiple resources related to the source resource.
  * @property {NIEMRelatedResources} [codes] - A data type for metadata about potentially multiple resources related to the source resource.
  */


/**
  * A data type for metadata about a singular resource related to the source resource.
  * @typedef {Object} NIEMRelatedResource
  *
  * @property {string} [label] - A relative label for a resource, such as a version number or a qualified name.
  * @property {string} [href] - A URI for the target resource.
  */


/**
  * A data type for metadata about potentially multiple resources related to the source resource.
  * @typedef {Object} NIEMRelatedResources
  *
  * @property {integer} [count] -
  * @property {string} [href] - A URI for the target resource.
  */


/** @type {NIEMModelLinksType} */
let NIEMModelLinks = {};

/** @type {NIEMModelResponseType} */
let NIEMModelResponse = {};

/** @type {NIEMVersionLinksType} */
let NIEMVersionLinks = {};

/** @type {NIEMVersionResponseType} */
let NIEMVersionResponse = {};

module.exports = {
  NIEMModel,
  NIEMModelLinks,
  NIEMModelResponse,

  NIEMVersion,
  NIEMVersionLinks,
  NIEMVersionResponse,
}