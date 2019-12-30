/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-js';
import { Reactotron as ReactotronInterface } from 'reactotron-core-client';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: ReactotronInterface;
  }
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.connect()
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .configure();

  (tron as any).clear();

  // eslint-disable-next-line no-console
  console.tron = tron;
}