import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
// import FriendRequestShowContainer from './friend_request_show_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    renderLogin(){
        if (this.props.loggedIn){
            return(
                <div onClick={this.props.logout}>
                    you are logged in; click to logout
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
                    <div className="navbar-submenu flex-center hover">How to Co-Tell</div>
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