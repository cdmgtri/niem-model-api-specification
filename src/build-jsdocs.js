
/**
 * Converts the definitions in api-schema.json to a file of JSDoc custom types.
 *
 * This file can be imported in other projects to get Intellisense for
 * the NIEM API objects defined by this project.
 */

const fs = require("fs");
const path = require("path");
const jsdoc = require("json-schema-to-jsdoc");

let jsDocs = "\n";
let str = "";
let schemasFolder = path.resolve(__dirname, "../schemas/deref");

let moduleExports = "module.exports = {";

fs
  .readdirSync( schemasFolder )
  .filter( fileName => fileName.match(/api-.*-schema.json/) )
  .forEach( fileName => {
    console.log(fileName);
    let label = fileName.replace("api-", "").replace("-schema.json", "");
    label = label.charAt(0).toUpperCase() + label.slice(1);
    label = label.replace("Response", "");

    let schema = JSON.parse( fs.readFileSync( path.join(schemasFolder, fileName) ) );

    for (let key in schema.properties) {

      if (key === "$schema") {
        continue;
      }

      // Get the JSDoc representation of the schema definition
      str = jsdoc(schema.properties[key]);

      // Format the name for the JSDoc @typedef parameter
      // (e.g., ModelResponseType => NIEMModelResponse)
      let name = "NIEM" + label + key + "Type";
      name = name.replace("links", "Links").replace("data", "");
      name = name
        .replace("modelResponse", "ModelResponse")
        .replace("versionResponse", "VersionResponse");

      // Update the JSDoc to replace the empty @name parameter with @typedef
      str = str.replace("@name", "@typedef {Object} " + name);

      // Update the JSDoc manually to use the correct type for related objects
      str = str.replace("{array} [versions]", "{NIEMVersion[]} [versions]");

      str += "\n\n";

      str += "/** @type {" + name + "} */ \n";
      str += "let " + name.replace("Type", "") + "= {}; \n";

      jsDocs += str + "\n\n";

      moduleExports += name.replace("Type", "") + ", ";
    }
  });

jsDocs += moduleExports.slice(0, moduleExports.length-2) + "};";

fs.writeFileSync("jsdocs/index.js", jsDocs);
console.log(jsDocs);
