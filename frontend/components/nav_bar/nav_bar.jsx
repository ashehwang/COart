import React from 'react';
import { Link } from 'react-router-dom';
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
        this.props.fetchUser(this.props.currentUser.id);
    }

    handleDropdown(){
        this.setState({ dropdown: !this.state.dropdown });
    }

    renderLogin(){

        const hidden = this.state.dropdown ? "" : "hidden";
        const { characters, currentUser, loggedIn } = this.props;
        
        if (!loggedIn) {
            return (
              <div className="session-container flex-diag">
                <div className="session flex-center hover" onClick={() => this.props.openModal('signup')}>Join</div>
                <div className="session flex-center hover" onClick={() => this.props.openModal('login')}>Login</div>
              </div>
            );
        } else if ( loggedIn && characters[currentUser.selected_id] ) {
            const avatar = characters[currentUser.selected_id];
            return(
                <div className="nav-profile flex-diag">
                    <div className="nav-char">
                        <h1>You are logged in as <span>{avatar.first_name}</span>.</h1>
                        <p>Hello, {currentUser.nick_name}!</p>
                    </div>
                    <div className="nav-dropdown relative">
                        <img src={avatar.headPhotoUrl} className="small-profile-pic hover" onClick={this.handleDropdown} />
                        {/* <a><i className="fas fa-caret-down" onClick={this.handleDropdown}></i></a> */}
                        <div className={`dropdown-menu flex-vert absolute ${hidden}`}>
                            <div className="dropdown hover dd-profile flex-diag">
                                <div>
                                    <img src="https://i.ibb.co/C59mJzN/ahri3.jpg" className="small-profile-pic"/>
                                </div>
                                <div>
                                    {currentUser.nick_name}
                                </div>
                            </div>
                            <div className="dropdown hover dd-chars" >
                                {/* Your Chars Here */}
                                {currentUser.character_ids.map( charId => < CharItem key={charId} character={characters[charId]} />)}
                            </div>
                            <div className="dropdown hover dd-add-chars" onClick={() => this.props.history.push("/create")}>
                                Create Character
                            </div>
                            <div className="dropdown hover dd-logout" onClick={() => this.props.logout()}>
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="nav-profile flex-diag">
                    <div className="nav-char">
                        Hello, {currentUser.nick_name}! Create a character to participate in CoTell.
                    </div>
                    <div className="nav-dropdown relative">
                        <img src="https://i.ibb.co/K9PYxTP/ahri2.jpg" className="small-profile-pic hover" onClick={this.handleDropdown} />
                        <div className={`dropdown-menu flex-vert absolute ${hidden}`}>
                            <div className="dropdown hover dd-profile">
                                Your Profile here
                            </div>
                            <div className="dropdown hover dd-chars" >
                                Your Chars Here
                            </div>
                            <div className="dropdown hover dd-add-chars" onClick={() => this.props.history.push("/create")}>
                                Create Character
                            </div>
                            <div className="dropdown hover dd-logout" onClick={() => this.props.logout()}>
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
            )
        } 
    }

    renderNavLogin(){
            const { characters, currentUser, loggedIn } = this.props;
        if (loggedIn && characters[currentUser.selected_id]){
            const avatar = characters[currentUser.selected_id];
            return (
              <>
                <div className="navbar-submenu flex-center hover">Feed</div>
                <div className="navbar-submenu flex-center hover">{avatar.first_name}'s Page</div>
                <div className="navbar-submenu flex-center hover">{currentUser.nick_name}'s Page</div>
              </>
            );
        } else if (loggedIn && !characters[currentUser.selected_id]) {
            return (
              <>
                <div className="navbar-submenu flex-center hover">Feed</div>
                <div className="navbar-submenu flex-center hover">{currentUser.nick_name}'s Page</div>
              </>
            );
        }else {
            return (
                <>
                    <div className="navbar-submenu flex-center hover">How to CoTell</div>
                    <div className="navbar-submenu flex-center hover">Featured</div>
                    <div className="navbar-submenu flex-center hover">Contact Us</div>
                </>
            )
        }
    }

    render() {

        return (
          <nav className="navbar-container">
            <div className="navbar-search-container">
              <SearchBarContainer />
            </div>
            <div className="navbar-menu flex-diag">
              <div className="navbar-submenu flex-center hover">World</div>
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