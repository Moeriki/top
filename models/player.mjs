import { compose } from '@stamp/it';

import hasId from './has-id';
import withSchema from './with-schema';

export default compose(hasId, withSchema({
  type: 'object',
}));
