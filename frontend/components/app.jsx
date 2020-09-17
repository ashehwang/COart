import React from 'react';
import Modal from './modal/modal';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';
import CharPageContainer from './char_page/char_page_container';
import CreateCharsContainer from './chars_form/create_chars_container';
// import ArtLogContainer from './art_log/art_log_container';
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
        <Route exact path="/character/:characterId" component={CharPageContainer}/>
        {/* <Route path="/" component={ArtLogContainer} /> */}
        <ProtectedRoute path="/create" component={CreateCharsContainer} />
    </>
);

export default App;