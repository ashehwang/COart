import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
// import FriendRequestShowContainer from './friend_request_show_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dropdown: false };
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown(){
        this.setState({ dropdown: !this.state.dropdown });
    }

    renderLogin(){

        const hidden = this.state.dropdown ? "" : "hidden";

        if (this.props.loggedIn){
            return(
                <div className="nav-profile flex-diag">
                    <div className="nav-char">
                        Hello, Blanche!
                    </div>
                    <div className="nav-dropdown relative">
                        <img src="https://i.ibb.co/Rv91CDx/blanche-head.png" className="small-profile-pic hover" onClick={this.handleDropdown} />
                        {/* <a><i className="fas fa-caret-down" onClick={this.handleDropdown}></i></a> */}
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
        } else {
            return (
              <div className="session-container flex-diag">
                <div className="session flex-center hover" onClick={() => this.props.openModal('signup')}>Join</div>
                <div className="session flex-center hover" onClick={() => this.props.openModal('login')}>Login</div>
              </div>
            );
        }
    }

    renderNavLogin(){
        if (this.props.loggedIn){
            return (
              <>
                <div className="navbar-submenu flex-center hover">Feed</div>
                <div className="navbar-submenu flex-center hover">Char Page</div>
                <div className="navbar-submenu flex-center hover">Username's Page</div>
              </>
            );
        } else {
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