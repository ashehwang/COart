import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

// const configureStore = (preloadedState = {}) => {
//     let store = createStore(pReducer, preloadedState, applyMiddleware(...middlewares));
//     let persistor = persistStore(store)
//     return { store, persistor }
// };

// export const persistor = persistStore(configureStore);

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;