import React from 'react';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_name: "", nick_name: "", password: "", email: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleClick(e) {
        this.props.signup(this.state)
            .then(() => this.props.closeModal());
    }

    renderErrors(){
        if(this.props.errors['user_name']){
            return(
                <div className="signup-error absolute">
                    Username has already been taken.
                </div>
            )
        } else return null;
    }

    render() {
        return (
            <div className="signup relative">
                <form className="signup-form">
                    <div className="signup-detail">
                        <label> Username: 
                        <input type="text" required id="username" value={this.state.user_name} onChange={this.update("user_name")} onFocus={this.props.removeErrors} />
                        </label>
                    </div>
                    <div className="signup-detail">
                        <label> E-mail: 
                        <input type="text" required id="email" value={this.state.email} onChange={this.update("email")} />
                        </label>
                    </div>
                    <div className="signup-detail">
                        <label> Nickname: 
                        <input type="text" required id="nickname" value={this.state.nick_name} onChange={this.update("nick_name")} />
                        </label>
                    </div>
                    <div className="signup-detail">
                        <label> Password:
                        <input type="password" required id="password" minLength="6" value={this.state.password} onChange={this.update("password")} />
                        </label>
                    </div> 
                    <div className="signup-button flex-center hover" onClick={this.handleClick}>
                        Sign Up
                    </div>                                      
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default SignupForm;