
// let modelTypes = require("../node_modules/niem-model-schema/jsdocs/index");


/**
  * A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model.
  * @typedef {Object} NIEMModel
  *
  * @property {string} [name] - A name of a model.
  * @property {string} [definition] - A definition or summary of a model.
  * @property {string} [description] - A detailed description of a model.
  * @property {string} [source] - An authoritative source for the model.
  * @property {string} [contactInfo] - A set of contact information for the model.
  * @property {string} [website] - A URL for an informational website about this model.
  * @property {NIEMPackage[]} [packages] - A set of packages that belong to this model.
  */


/**
  * A data type for a specific version or release of a model.
  * @typedef {Object} NIEMPackage
  *
  * @property {string} [modelName] - A name of the model to which this package belongs.
  * @property {string} [version] - A version number.
  * @property {string} [draft] - A sub-version number, such as a pre-release identifier.
  * @property {string} [baseNIEM] - A NIEM release that this resource is based on.
  * @property {string} [uri] - A target namespace or other ID for this model package.
  * @property {string} [changeSummary] - A summary of the changes from the previous package, if applicable.
  * @property {string} [location] - A URL for the model package folder.
  * @property {object} [more] - Any additional metadata to be captured.
  */



/**
  * Represents a undefined object
  * @typedef {Object} NIEMModelResponse
  *
  * @property {string} [$schema] -
  * @property {NIEMModel} [data] - A data type representing the NIEM data model, an IEPD, an EIEM, or another kind of NIEM-based data model.
  * @property {NIEMModelLinks} [links] - A data type for metadata about model-related resources.
  */


/**
  * A data type for metadata about model-related resources.
  * @typedef {Object} NIEMModelLinks
  *
  * @property {string} [href] - A URI for the target resource.
  * @property {NIEMPackageLinks} [packages] - A data type for metadata about a singular resource related to the source resource.
  */


/**
  * Represents a undefined object
  * @typedef {Object} NIEMPackageResponse
  *
  * @property {string} [$schema] -
  * @property {NIEMPackage} [data] - A data type for a specific version or release of a model.
  * @property {NIEMPackageLinks} [links] - A data type for metadata about package-related resources.
  */


/**
  * A data type for metadata about package-related resources.
  * @typedef {Object} NIEMPackageLinks
  *
  * @property {string} [href] - A URI for the target resource.
  * @property {string} [zip] - (Temporary workaround) The location of the zip file for this project.
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
