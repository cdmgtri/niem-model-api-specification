
# API Information

Note on endpoints:

Endpoints are configured to end with `.json` for now in the specification to support the use of a static API via JSON files on GitHub pages.

Note on IDs:

Descriptive IDs will be used instead of automatically generated integers, such as Property ID `niem-4.0-nc:Person`.  This will lengthen URLs but has the following benefits:

- Allows for meaningful endpoints, which can be typed out or linked to without a resource-to-ID map (ID of "NIEM 4.1 nc:PersonType" = 002131)
- Should simplify content and ID management.  When content has to be reloaded, automatically-generated unique IDs would not be the same.

---

## Repo info

| Endpoints | Description |
| --------- | ----------- |
| **/repo** | Get metadata about the repo (model counts, model authoritative sources, counts, etc.).

---

## Model info

| Endpoints | Description |
| --------- | ----------- |
| **/models** | Get metadata about all models.
| **/models/:model** <br> `/models/niem` <br> `/models/hvpd-arrest-rpt` | Get a model.

---

## Version info

Looking for consistent terminology:

- NIEM has releases
- NIEM releases have versions (pre-release drafts like alpha1, beta2; 1)
- IEPDs have versions
- Namespaces have versions

Choices for the API:

- Models have versions.
- Versions may have drafts.
- Version IDs will include draft IDs if necessary (e.g., "4.0-alpha1").
- Use "release" when referring to NIEM releases only.

versionID = modelID-versionNumber(-draft)?

| Endpoints | Description |
| --------- | ----------- |
| ~~/versions?model=niem~~ <br> **/models/:model/versions** <br> `/models/niem/versions` <br> `/models/hvpd-arrest-rpt/versions` | Get metadata about all versions in a model. <br> Workaround for unavailable query string. |
| **/versions/:version** <br> `/versions/niem-2.0` <br> `/versions/niem-4.2-alpha1` <br> `/versions/hvpd-arrest-rpt-2.0` | Get a version. |

---

## Namespace info

Namespaces are available if designated with a NIEM conformance target or conformant indicator.

namespaceID = versionID-prefix

| Endpoints | Description |
| --------- | ----------- |
| ~~/namespaces?version=niem-2.0~~ <br> **/versions/:version/namespaces** <br> `/versions/niem-2.0/namespaces` | Get metadata about all namespaces in a version. <br> Workaround for unavailable query string. |
| **/namespaces/:namespace** <br> `/namespaces/niem-2.0-nc` <br> `/namespaces/hvpd-arrest-rpt-2.0-ext` | Get a namespace. |

---

## Property info

propertyID = namespaceID-qname.

| Endpoints | Description |
| --------- | ----------- |
| ~~/properties?version=niem-2.0~~ <br> **/versions/:version/properties** <br> `/versions/niem-2.0/properties` | Get metadata about all properties in a model version. <br> Workaround for unavailable query string. |
| ~~/properties?namespace=niem=2.0-nc~~ <br> **/namespaces/:namespace/properties** <br> `/namespaces/niem-2.0-nc/properties` | Get metadata about all properties in a namespace. <br> Workaround for unavailable query string. |
| **/properties/:property** <br> `/properties/niem-2.0-nc:Person` | Get a property. |

---

## Type Info

typeID = namespaceID-qname.

| Endpoints | Description |
| --------- | ----------- |
| ~~/types?version=niem-2.0~~ <br> **/versions/:version/types** <br> `/versions/niem-2.0/types` | Get metadata about all types in a model version. <br> Workaround for unavailable query string. |
| ~~/types?namespace=niem=2.0-nc~~ <br> **/namespaces/:namespace/types** <br> `/namespaces/niem-2.0-nc/types` | Get metadata about all types in a namespace. <br> Workaround for unavailable query string. |
| **/types/:type** <br> `/types/niem-2.0-nc:PersonType` | Get a type. |

---

## Code info

Return non-enumeration facet data with the type to simplify the endpoints (will not have to specify facet kind) and to use more familiar terminology for the community.

Returns an array of definitions in case code val is not unique.

codeID = typeID-value

| Endpoints | Description |
| --------- | ----------- |
| ~~/codes?version=niem-2.0~~ <br> **/versions/:version/codes** <br> `/versions/niem-2.0/codes` | Get metadata about all codes in a model version. <br> Workaround for unavailable query string. |
| ~~/codes?namespace=niem=2.0-nc~~ <br> **/namespaces/:namespace/codes** <br> `/namespaces/niem-2.0-nc/codes` | Get metadata about all codes in a namespace. <br> Workaround for unavailable query string. |
| ~~/codes?type=niem=2.0-ncic:EYEColorCodeType~~ <br> **/types/:type/codes** <br> `/types/niem-2.0-ncic:EYEColorCodeType/codes` | Get metadata about all codes in a type. <br> Workaround for unavailable query string. |
| **/codes/:code** <br> `/codes/niem-2.0-ncic:EYEColorCodeType-BLU` | Get a code. |
