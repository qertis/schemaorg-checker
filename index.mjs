import validator from 'validator';
import SchemaOrg from 'schema.org';

export const schemaOrg = new SchemaOrg();

export default function isSchemaOrg (document) {
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
