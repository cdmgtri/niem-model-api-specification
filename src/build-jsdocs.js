
/**
 * Converts the definitions in api-schema.json to a file of JSDoc custom types.
 *
 * This file can be imported in other projects to get Intellisense for
 * the NIEM API objects defined by this project.
 */

const fs = require("fs");
const jsdoc = require("json-schema-to-jsdoc");
const schema = require("../schemas/api-schema-deref.json");

let jsDocs = "\n";
let str = "";

for( let key in schema.definitions ) {

  // Get the JSDoc representation of the schema definition
  str = jsdoc(schema.definitions[key]);

  // Format the name for the JSDoc @typedef parameter
  // (e.g., ModelResponseType => NIEMModelResponse)
  let name = "NIEM" + key.replace("Type", "");

  // Update the JSDoc to replace the empty @name parameter with @typedef
  str = str.replace("@name", "@typedef {Object} " + name);

  // Update the JSDoc manually to use the correct type for related objects
  str = str.replace("{array} [packages]", "{NIEMPackage[]} [packages]");

  jsDocs += str + "\n\n";
}

fs.writeFileSync("jsdocs/index.js", jsDocs);
console.log(jsDocs);
console.log("Updated jsdocs.  Update the results in jsdocs/index.js by hand to correct generator errors.");
