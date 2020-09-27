import React from 'react';
// import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
import CharItem from './char_item';
// import FriendRequestShowContainer from './friend_request_show_container';
// const charactetLocation = this.props.location.pathname === "/character/.*" ? "habitsLocation" : "";

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
                        <i className="fas fa-caret-down white absolute hover" onClick={this.handleDropdown}></i>
                        <div className={`dropdown-menu shadow flex-vert absolute ${hidden}`}>
                            <div className="dropdown hover dd-profile flex">
                                <div>
                                    <img src="https://i.ibb.co/C59mJzN/ahri3.jpg" className="smaller-profile-pic"/>
                                </div>
                                <div>
                                    {currentUser.nick_name} <span>@{currentUser.user_name}</span>
                                </div>
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
                        <img src="https://i.ibb.co/K9PYxTP/ahri2.jpg" className="small-profile-pic hover" onClick={this.handleDropdown} />
                        <i className="fas fa-caret-down white absolute" onClick={this.handleDropdown}></i>
                        <div className={`dropdown-menu shadow flex-vert absolute ${hidden}`}>
                            <div className="dropdown hover dd-profile flex">
                                <div>
                                    <img src="https://i.ibb.co/C59mJzN/ahri3.jpg" className="smaller-profile-pic"/>
                                </div>
                                <div>
                                    {currentUser.nick_name} <span>@{currentUser.user_name}</span>
                                </div>
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

            let charPageReg = new RegExp('^/character/');
            let boardPageReg = new RegExp('^/board');

            const main = this.props.location.pathname === "/" ? "nav-selected" : "";
            const charPage = this.props.location.pathname.match(charPageReg) ? "nav-selected" : "";
            const userPage = this.props.location.pathname === "user/.*" ? "nav-selected" : "";
            const board = this.props.location.pathname.match(boardPageReg) ? "nav-selected" : "";


            if (loggedIn && characters[currentUser.selected_id]){
            const avatar = characters[currentUser.selected_id];
            return (
              <>
                <div className={`navbar-submenu hover ${""}`} onClick={() => this.props.history.push("/write")}>Write</div>
                <div className={`navbar-submenu hover ${charPage}`} onClick={() => this.props.history.push(`/character/${avatar.id}`)}>{avatar.first_name}'s Page</div>
                {/* <div className={`navbar-submenu hover ${userPage}`}>{currentUser.nick_name}'s Page</div> */}
                <div className={`navbar-submenu hover ${board}`} onClick={() => this.props.history.push("/board")}>Board</div>
              </>
            );
        } else if (loggedIn && !characters[currentUser.selected_id]) {
            return (
                <>
                <div className={`navbar-submenu hover ${main}`}>Feed</div>
                <div className={`navbar-submenu hover ${userPage}`}>{currentUser.nick_name}'s Page</div>
                <div className="navbar-submenu hover" onClick={() => this.props.history.push("/create")}>Create Character</div>
              </>
            );
        }else {
            return (
                <>
                    <div className={`navbar-submenu hover ${""}`}>How to CoTell</div>
                    <div className={`navbar-submenu hover ${""}`}>Featured</div>
                    <div className={`navbar-submenu hover ${board}`} onClick={() => this.props.history.push("/board")}>Board</div>
                    {/* <div className={`navbar-submenu hover ${""}`}>Board</div> */}
                </>
            )
        }
    }

    render() {

        const main = this.props.location.pathname === "/main" ? "nav-selected" : "";

        return (
          <nav className="navbar-container">
            <div className="navbar-search-container">
              <div className="hover" onClick={() => this.props.history.push("/")}><img src="https://i.ibb.co/tMkrDPR/Untitled.png" /></div>
              <div className="flex">
                <i className="fas fa-search white"></i>
                <SearchBarContainer />
              </div>
            </div>
            <div className="navbar-menu flex">
              <div className={`navbar-submenu hover ${main}`} onClick={()=>this.props.history.push("/main")}>World</div>
              {this.renderNavLogin()}
            </div>
            <div className="navbar-right">{this.renderLogin()}</div>
          </nav>
        );
    }
}

export default NavBar;


// class NavBar extends React.Component {
//   render() {
//     const landing =
//       this.props.location.pathname === "/landing" ? "landing" : "";
//     const tasksLocation =
//       this.props.location.pathname === "/tasks" ? "tasksLocation" : "";
//     const habitsLocation =
//       this.props.location.pathname === "/habits" ? "habitsLocation" : "";

//     return (
//       <div className="navbar-container">
//         <div className="navbar">
//           <div
//             className={`link-home ${landing}`}
//             onClick={() => this.props.history.push("/landing")}
//           >
//             Home
//           </div>
//           <div
//             className={`link-tasks ${tasksLocation}`}
//             onClick={() => this.props.history.push("/tasks")}
//           >
//             Tasks
//           </div>
//           <div
//             className={`link-habits ${habitsLocation}`}
//             onClick={() => this.props.history.push("/habits")}
//           >
//             Habits
//           </div>
//           <Dropdown />
//         </div>
//       </div>
//     );
//   }
// }