import React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user_name: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
      return (
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={this.state.user_name}
                onChange={this.update("user_name")}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <input type="submit" value="Log In" />
          </form>
        </div>
      );
  }

}

export default LoginForm