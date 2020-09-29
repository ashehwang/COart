import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/store';
import Root from './components/root';

// import { configureStore } from './stores/store';
import { loadState, saveState } from './util/local_storage';
import throttle from 'lodash/throttle';

document.addEventListener("DOMContentLoaded", () => {

    

    // const store = createStore(todoApp, persistedState)


    let store;
    
    if (window.currentUser) {
        // const preloadedState = {
        //     session: { id: window.currentUser.session.id },
        //     entities: {
        //         users: { [window.currentUser.session.id]: window.currentUser.users[window.currentUser.session.id] }
        //     }
        // }
        const preloadedUser = {
            session: { id: window.currentUser.session.id },
            entities: {
                users: { [window.currentUser.session.id]: window.currentUser.users[window.currentUser.session.id] }
            }
        }

        const persistedState = loadState();

        const preloadedState = Object.assign({}, persistedState, preloadedUser);

        store = configureStore(preloadedState);
        // store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        const preloadedState = loadState();
        store = configureStore(preloadedState);
    }

    store.subscribe(() => {
        saveState(store.getState());
    });
    // store.subscribe(throttle(() => {
    //     saveState({
    //         entities: store.getState().entities,
    //         session: store.getState().session });
    // }, 1000));
    store.subscribe(throttle(() => {
        saveState({
            entities: store.getState().entities
            });
    }, 1000));

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)

    window.getState = store.getState;
    window.dispatch = store.dispatch;
})