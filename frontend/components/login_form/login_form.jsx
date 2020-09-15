import React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user_name: "", password: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.login(this.state)
      .then(() => this.props.closeModal());
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    return (
      <div className="signup">
        <form className="signup-form">
          <div className="signup-detail">
            <label>
              {" "}
              Username:
              <input
                type="text"
                required
                id="username"
                value={this.state.user_name}
                onChange={this.update("user_name")}
              />
            </label>
          </div>
          <div className="signup-detail">
            <label>
              {" "}
              Password:
              <input
                type="password"
                required
                id="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
          </div>
          <div
            className="signup-button flex-center hover"
            onClick={this.handleClick}
          >
            Log In
          </div>
        </form>
      </div>
    );
  }

}

export default LoginForm;