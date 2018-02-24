import Ajv from 'ajv';
import { compose, methods, statics } from '@stamp/it';

export default (schema) => {
  const ajv = new Ajv();
  const validator = ajv.compile(schema);
  const validate = (data) => {
    if (!validator.validate(data)) {
      // TODO validator.errors;
      return false;
    }
    return true;
  };

  return compose(
    methods({
      validate() {
        return validate(this.data);
      },
    }),
    statics({ validate }),
  );
};
