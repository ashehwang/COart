import React from 'react';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_name: "", nick_name: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    // handleDemoLogin(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     this.props.loginDemoUser();
    // }

    render() {

        return (
            <div className="signup">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div className="signup-username">
                        <label> UserName: 
                        <input type="text" required id="username" value={this.state.user_name} onChange={this.update("user_name")} />
                        </label>
                    </div>
                    <div className="signup-nickname">
                        <label> NickName: 
                        <input type="text" required id="nickname" value={this.state.nick_name} onChange={this.update("nick_name")} />
                        </label>
                    </div>
                    <div className="signup-password">
                        <label> Password:
                        <input type="password" required id="password" minLength="6" value={this.state.password} onChange={this.update("password")} />
                        </label>
                    </div> 
                    <div className="signup-button">
                        <input type="submit" value="Sign Up" />
                    </div>                                      
                </form>
            </div>
        )
    }
}

export default SignupForm;