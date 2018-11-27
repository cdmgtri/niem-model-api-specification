
# NIEM Model API

This project defines a mock static REST API to provide easy access to release and IEPD metadata and components.  This is to support the development of the future NIEM tool strategy and tool prototyping in a simple manner.

Content will be provided in a separate GitHub project as JSON files using GitHub Pages.  This setup will look and behave similar to a regular REST API, with a few exceptions...

- Endpoints will end with `.json`, corresponding to the hosted JSON files.
- No server-side processing is available, so only full data files can be returned (no filtered or paginated results, no query strings on URLs).

Note that this API is under development and is subject to drastic changes.

## Overview

File `openapi.yaml` describes the NIEM model API with the available endpoints and operations.

In order to maximize reuse, definitions and examples have been split out into their own JSON and JSON Schema files.

### File References

Because of current issues with tool support for OpenAPI and external file references (`$ref`), `openapi.yaml` should not be modified directly.

Edits should be made to `openapi-base.yaml`.  This is an OpenAPI 3.0.2 file that contains a full description of the API.  It uses `$refs` to import definitions and examples.  The [SPECCY](https://speccy.io/) toolkit is used in the build process to resolve these file references and generate the final `openapi.yaml` which has better tool support.

### Definitions

Due to its simpler syntax, the source of the model and api schemas are YAML files, written in the nature of JSON schema.  The corresponding JSON Schema files are generated products and should not be modified directly.

## Usage

### Installation

```sh
npm install
```

### Convert

- Generate the JSON Schema versions of the model and api definitions from the corresponding YAML file.
- Generate the `openapi.yaml` file with resolved file references from the `openapi-base.yaml` file.

```sh
npm run convert
```

### Test

- Run validation on model and api JSON Schemas in the `schemas/` directory.
- Run validation on example JSON instances in the `examples/` directory.
- Run lint on `openapi.yaml`

```sh
npm run test
```

### Documentation

- Generate API documentation as a zero-dependency HTML file.

```sh
npm run docs
```

### Build

Run the above steps with one command:

- Convert
- Test
- Documentation

```sh
npm run build
```

## JSDocs

Generate JSDocs for the API schema definitions.

Note: The library that generates the JSDocs is throwing an error when running on the original JSON schema (with reference) and does not generate sub-properties correctly for the dereferenced schema.  After generating, fix jsdocs/index.js by hand to reuse related types rather than defining sub-properties.

```bash
npm run jsdocs

# Fix JSDoc type definitions in jsdocs/index.js by hand.
```

### Watch file changes

Generate an updated build on changes to YAML files:

```sh
npm run watch:schemas
```

Run validation on updated example JSON instances:

```sh
npm run watch:examples
```

## TODO

- Update based on changes to `niem-model-schema` repo.
- Update contact url in `openapi-base.yaml` if pushed to niem
