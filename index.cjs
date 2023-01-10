const validator = require('validator');
const SchemaOrg = require('schema.org');

const schemaOrg = new SchemaOrg();

module.exports.isSchemaOrg = (document) => {
  if (!document) {
    return false;
  }
  let object;
  if (typeof document === 'object') {
    object = document;
  }
  if (typeof document === 'string') {
    if (validator.isJSON(document)) {
      object = JSON.parse(document);
    }
  }
  if (typeof object === 'object') {
    if (schemaOrg.getType(object) !== undefined) {
      return true;
    }
  }
  return false;
};

module.exports.schemaOrg = schemaOrg;
