/* eslint-disable no-console */
import 'reflect-metadata';
import './container';
import './database';

import app from './app';

app.listen(3000, () => {
  console.log('🚀 Server started on port 3000!');
});
