import React from 'react';
import Modal from './modal/modal';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';
import CharPageContainer from './char_page/char_page_container';
import CreateCharsContainer from './chars_form/create_chars_container';
import MainPageContainer from './main_page/main_page_container';
import EditCharContainer from './chars_form/edit_char_form_container';
import CreateBoardPostContainer from './board/create_board_post_container';
import BoardContainer from './board/board_container';
import BoardPostShowContainer from './board/board_post_show_container';
import EditBoardPostContainer from './board/edit_board_post_container';
import CreateCommunityContainer from './community_forms/create_community_container';
import CommunitiesPageContainer from './communities_page/communities_page_container';
import CommunityPageContainer from './community_page/community_page_container';

// import ArtLogContainer from './art_log/art_log_container';

const App = () => (
    <>
        <Modal />
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/main" component={MainPageContainer} />
        <Route exact path="/board" component={BoardContainer} />
        <Route exact path="/board/:boardPostId" component={BoardPostShowContainer} />
        <Route exact path="/character/:characterId" component={CharPageContainer}/>
        <Route exact path="/worlds" component={CommunitiesPageContainer}/>
        <Route exact path="/world/:worldUrl" component={CommunityPageContainer}/>
        <ProtectedRoute path="/recruit" component={CreateCommunityContainer} />
        <ProtectedRoute path="/create" component={CreateCharsContainer} />
        <ProtectedRoute path="/write" component={CreateBoardPostContainer} />
        <ProtectedRoute path="/edit/:characterId" component={EditCharContainer} />
        <ProtectedRoute path="/board/edit/:boardPostId" component={EditBoardPostContainer} />
    </>
);

export default App;