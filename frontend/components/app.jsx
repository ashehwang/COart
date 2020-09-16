import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import ArtLogContainer from './art_log/art_log_container';
import CreateCharsContainer from './chars_form/create_chars_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
// import ProfileContainer from './profile/profile_container';
// import Entry from './entry';
// import MainMenu from './main';



const App = () => (
    <>
        <Modal />
        {/* <Switch>
            <ProtectedRoute path="/profile/:userId" component={ProfileContainer}/>
            <ProtectedRoute path="/main" component={MainMenu} />
            <AuthRoute path="/" component={Entry} />
            <Route render={() => <Redirect to="/" />} />
        </Switch> */}

        <Route path="/" component={NavBarContainer} />
        {/* <Route path="/" component={ArtLogContainer} /> */}
        <ProtectedRoute path="/create" component={CreateCharsContainer} />
    </>
);

export default App;