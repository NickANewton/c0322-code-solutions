import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const drawerHidden = this.state.isClicked
      ? ''
      : 'hidden';
    const barsHidden = this.state.isClicked
      ? 'hidden'
      : '';
    const shade = this.state.isClicked
      ? 'shade shade-transition'
      : '';

    return (
      <div>
        <i className={`fas fa-bars fa-2x icon-margin ${barsHidden}`} onClick={this.handleClick}></i>
        <div className='display-flex'>
          <div className={`drawer ${drawerHidden}`}>
            <h1>Menu</h1>
            <nav>
              <ul className='li-styles'>
                <li onClick={this.handleClick}><a href='#'>About</a></li>
                <li onClick={this.handleClick}><a href='#'>Get Started</a></li>
                <li onClick={this.handleClick}><a href='#'>Sign In</a></li>
              </ul>
            </nav>
          </div>
          <div className={shade} onClick={this.handleClick}></div>
        </div>
        </div>
    );
  }
}

export default AppDrawer;
