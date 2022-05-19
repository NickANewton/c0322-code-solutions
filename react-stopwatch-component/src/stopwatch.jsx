import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pause',
      seconds: 0
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    this.timerId = setInterval(() => {
      this.setState({
        status: 'play',
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }

  pause() {
    clearInterval(this.timerId);
    this.setState({
      status: 'pause',
      seconds: this.state.seconds
    });
  }

  reset() {
    this.setState({
      status: 'pause',
      seconds: 0
    });
  }

  render() {
    const status = this.state.status;
    let timer;
    let icon;

    if (status === 'pause') {
      icon = <i onClick={this.start} className="fas fa-play fa-2x mt-3"></i>;
      timer = (
                <div onClick={this.reset} className='d-flex border border-3 border-dark rounded-circle circle justify-content-center align-items-center'>
                  <h1>{this.state.seconds}</h1>
                </div>
      );

    } else {
      icon = <i onClick={this.pause} className="fas fa-pause fa-2x mt-3"></i>;
      timer = (
        <div className='d-flex border border-3 border-dark rounded-circle circle justify-content-center align-items-center'>
          <h1>{this.state.seconds}</h1>
        </div>
      );
    }
    return (
      <div className='d-flex full-page justify-content-center align-items-center flex-column'>
        <div>
          { timer }
        </div>
        <div>
          { icon }
        </div>
      </div>
    );
  }
}

export default StopWatch;
