import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
      password: this.state.password
    });
  }

  handlePasswordChange(event) {
    this.setState({
      username: this.state.username,
      password: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="userName">Username</label>
        <input id='userName' type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <label htmlFor="password" >Password</label>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <button>Sign Up</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RegistrationForm />);
