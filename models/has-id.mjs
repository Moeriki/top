import { init } from '@stamp/it';

import uuid from 'uuid';

export default init(function initId({ id }) {
  this.id = id || uuid.v4();
});
