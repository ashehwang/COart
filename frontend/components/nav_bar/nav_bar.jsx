import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBarContainer from './search_bar_container';
// import FriendRequestShowContainer from './friend_request_show_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_name: "", password: "" };
        console.log(this.props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    renderLogin(){
        if (this.props.loggedIn){
            return(
                <div onClick={this.props.logout}>
                    you are logged in; click to logout
                </div>
            )
        } else {
            return(
                <div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label>Username: 
                            <input type="text" value={this.state.user_name} onChange={this.update("user_name")} />
                        </label>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update("password")} />
                        </label>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            )
        }
    }

    render() {

        return (
            <nav className="navbar-container">
                {this.renderLogin()}
            </nav>
        )
    }
}

export default NavBar;