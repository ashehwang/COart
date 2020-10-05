import React from 'react';
// import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
import CharItem from './char_item';
// import FriendRequestShowContainer from './friend_request_show_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dropdown: false };
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    componentDidMount(){
        if (this.props.loggedIn) this.props.fetchUser(this.props.currentUser.id);
    }

    handleDropdown(){
        this.setState({ dropdown: !this.state.dropdown });
    }

    youveGotMail(){
        const { loggedIn, currentUser } = this.props;
        if (loggedIn && currentUser) {
            if (currentUser.unseen_message_ids.length) {
                return(
                    <div className="nav-alert-message absolute flex-center">
                        <i className="far fa-envelope"></i>
                    </div>
                )
            }
        } else return null;
    }

    youveGotMail2(){
        const { loggedIn, currentUser } = this.props;
        if (loggedIn && currentUser) {
            if (currentUser.unseen_message_ids.length) {
                return(
                    <div className="nav-alert-message2 absolute flex-center">
                        <i className="fas fa-envelope-open-text"></i>
                        You have {currentUser.unseen_message_ids.length} new messages.
                    </div>
                )
            }
        } else return null;
    }

    renderLogin(){

        const hidden = this.state.dropdown ? "" : "hidden";
        const { characters, currentUser, loggedIn, selectChar } = this.props;
        
        if (!loggedIn) {
            return (
              <div className="session-container flex">
                <div className="session flex-center hover" onClick={() => this.props.openModal('signup')}>Join</div>
                <div className="session flex-center hover" onClick={() => this.props.openModal('login')}>Login</div>
              </div>
            );
        } else if ( loggedIn && characters[currentUser.selected_id] ) {
            const avatar = characters[currentUser.selected_id];
            return(
                <div className="nav-profile flex">
                    <div className="nav-char">
                        <h1>You are logged in as <span>{avatar.first_name}</span>.</h1>
                        <p>Hello, {currentUser.nick_name}! :) </p>
                    </div>
                    <div className="nav-dropdown relative">
                        <img src={avatar.headPhotoUrl} className="small-profile-pic hover" onClick={this.handleDropdown} />
                        {this.youveGotMail()}
                        {/* <div className="nav-alert-message absolute flex-center"><i className="far fa-envelope"></i></div> */}
                        <i className="fas fa-caret-down white absolute hover" onClick={this.handleDropdown}></i>
                        <div className={`dropdown-menu shadow flex-vert absolute ${hidden}`}>
                            <div className="dropdown hover dd-profile relative flex" onClick={() => this.props.history.push(`/user/${currentUser.user_name}`)}>
                                <div>
                                    <img src={currentUser.photoUrl} className="smaller-profile-pic"/>
                                </div>
                                <div>
                                    {currentUser.nick_name} <span>@{currentUser.user_name}</span>
                                </div>
                                {this.youveGotMail2()}
                            </div>
                            <div className="dropdown hover dd-chars" >
                                <div className="flex-center"><p>Your Characters</p></div>
                                {currentUser.character_ids.map( charId => < CharItem key={charId} character={characters[charId]} selectChar={selectChar}/>)}
                            </div>
                            <div className="dropdown hover dd-add-chars" onClick={() => this.props.history.push("/create")}>
                                <i className="fas fa-plus white"></i>Create Character
                            </div>
                            <div className="dropdown hover dd-logout" onClick={() => this.props.logout()}>
                                <i className="fas fa-sign-out-alt white"></i>Log Out
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="nav-profile flex">
                    <div className="nav-char2 white">
                        Hello, {currentUser.nick_name}! Create a character to participate in CoTell.
                    </div>
                    <div className="nav-dropdown relative">
                        {this.youveGotMail()}
                        <img src="https://i.ibb.co/K9PYxTP/ahri2.jpg" className="small-profile-pic hover" onClick={this.handleDropdown} />
                        <i className="fas fa-caret-down white absolute hover" onClick={this.handleDropdown}></i>
                        <div className={`dropdown-menu shadow flex-vert absolute ${hidden}`}>
                            <div className="dropdown hover dd-profile flex relative" onClick={() => this.props.history.push(`/user/${currentUser.user_name}`)}>
                                <div>
                                    {/* <img src="https://i.ibb.co/C59mJzN/ahri3.jpg" className="smaller-profile-pic"/> */}
                                    <img src={currentUser.photoUrl} className="smaller-profile-pic"/>
                                </div>
                                <div>
                                    {currentUser.nick_name} <span>@{currentUser.user_name}</span>
                                </div>
                                {this.youveGotMail2()}
                            </div>
                            <div className="dropdown hover dd-add-chars" onClick={() => this.props.history.push("/create")}>
                                <i className="fas fa-plus white"></i>Create Character
                            </div>
                            <div className="dropdown hover dd-logout" onClick={() => this.props.logout()}>
                                <i className="fas fa-sign-out-alt white"></i>Log Out
                            </div>
                        </div>
                    </div>
                </div>
            )
        } 
    }

    renderNavLogin(){
            const { characters, currentUser, loggedIn } = this.props;

            let boardPageReg = new RegExp('^/board');

            const main = this.props.location.pathname === "/main" ? "nav-selected" : "";
            const worlds = this.props.location.pathname === "/worlds" ? "nav-selected" : "";
            const howto = this.props.location.pathname === "/" ? "nav-selected" : "";
            const feed = this.props.location.pathname === "/feed" ? "nav-selected" : "";
            const board = this.props.location.pathname.match(boardPageReg) ? "nav-selected" : "";
            
            if (loggedIn && characters[currentUser.selected_id]) {

            const charPage = this.props.location.pathname === `/character/${currentUser.selected_id}` ? "nav-selected" : "";
            const avatar = characters[currentUser.selected_id];

            return (
              <>
                <div className={`navbar-submenu hover ${feed}`} onClick={() => this.props.history.push("/feed")}>Feed</div>
                <div className={`navbar-submenu hover ${charPage}`} onClick={() => this.props.history.push(`/character/${avatar.id}`)}>{avatar.first_name}'s Page</div>
                <div className={`navbar-submenu hover ${worlds}`} onClick={() => this.props.history.push("/worlds")}>Open Worlds</div>
                <div className={`navbar-submenu hover ${board}`} onClick={() => this.props.history.push("/board")}>Board</div>
              </>
            );
        } else if (loggedIn && !characters[currentUser.selected_id]) {
            return (
                <>
                <div className={`navbar-submenu hover ${main}`} onClick={() => this.props.history.push("/main")}>Featured</div>
                <div className={`navbar-submenu hover ${feed}`} onClick={() => this.props.history.push("/feed")}>Feed</div>
                <div className={`navbar-submenu hover ${worlds}`} onClick={() => this.props.history.push("/worlds")}>Open Worlds</div>
                <div className={`navbar-submenu hover ${board}`} onClick={() => this.props.history.push("/board")}>Board</div>
              </>
            );
        } else {
            return (
                <>
                    <div className={`navbar-submenu hover ${main}`} onClick={() => this.props.history.push("/main")}>Featured</div>
                    <div className={`navbar-submenu hover ${howto}`} onClick={() => this.props.history.push("/")}>How to CoTell</div>
                    <div className={`navbar-submenu hover ${worlds}`} onClick={() => this.props.history.push("/worlds")}>Open Worlds</div>
                    <div className={`navbar-submenu hover ${board}`} onClick={() => this.props.history.push("/board")}>Board</div>
                </>
            )
        }
    }

    render() {

        const main = this.props.location.pathname === "/main" ? "nav-selected" : "";

        return (
          <nav className="navbar-container">
            <div className="navbar-search-container">
              {/* <div className="hover" onClick={() => this.props.history.push("/main")}><img src="https://i.ibb.co/tMkrDPR/Untitled.png" /></div> */}
              <div className="hover" onClick={() => this.props.history.push("/")}><img src="https://i.ibb.co/y8hYN50/cotellimage.png" /></div>
              <div className="flex">
                <i className="fas fa-search white"></i>
                <SearchBarContainer />
              </div>
            </div>
            <div className="navbar-menu flex">
              {this.renderNavLogin()}
            </div>
            <div className="navbar-right">{this.renderLogin()}</div>
          </nav>
        );
    }
}

export default NavBar;