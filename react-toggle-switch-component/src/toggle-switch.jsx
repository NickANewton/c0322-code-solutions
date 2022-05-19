import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: 'on' };
    this.toggleOff = this.toggleOff.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
  }

  toggleOff() {
    this.setState({ toggle: 'off' });
  }

  toggleOn() {
    this.setState({ toggle: 'on' });
  }

  render() {
    let position;
    let word;
    const toggle = this.state.toggle;
    if (toggle === 'on') {
      position = (<div className="border border-dark div-size bg-success d-flex justify-content-end">
                      <div onClick={this.toggleOff} className='border border-dark rounded-circle bg-white switch'></div>
                   </div>
      );

      word = <h1 className="ms-3">ON</h1>;
    } else {
      position = (<div className="border border-dark div-size bg-secondary d-flex justify-content-start">
        <div onClick={this.toggleOn} className='border border-dark rounded-circle bg-white switch'></div>
      </div>
      );

      word = <h1 className="ms-3">OFF</h1>;
    }

    return (
      <div className='d-flex justify-content-center align-items-center full-page'>
        { position }
        <div>
          { word }
        </div>
      </div>
    );
  }
}

export default Toggle;
