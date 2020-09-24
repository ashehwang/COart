import App from './app';
import React from 'react';
import { HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

// import configureStore from '../stores/store';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// let persistor = configureStore().persistor;

const Root = ({ store }) => (

  <Provider store={store}>
    <HashRouter>
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </HashRouter>
  </Provider>
);

export default Root;