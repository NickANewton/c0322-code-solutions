import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    let passwordRequired;
    let passwordLength;
    let iconStatus;

    if (this.state.password === '') {
      passwordRequired = 'A password is required.';
      iconStatus = 'fa-times color-red';
    } else if (this.state.password.length < 8) {
      passwordLength = 'Your password is too short.';
      iconStatus = 'fa-times color-red';
    } else {
      passwordLength = '';
      iconStatus = 'fa-check color-green';
    }
    return (
      <form>
        <label className='display-block' htmlFor='password'>Password</label>
        <div className='display-flex align-center mt-half'>
          <input id='password' className='padding-pt-1' type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <i className={`ml-half fas ${iconStatus}`}></i>
        </div>
        <p className='color-red font-size mt-half'>{passwordRequired}{passwordLength}</p>
      </form>
    );
  }
}

export default ValidatedInput;
