import React from 'react';

const images = [
  {
    name: 'Pikachu',
    imgUrl: '../images/025.png'
  },
  {
    name: 'Bulbasaur',
    imgUrl: '../images/001.png'
  },
  {
    name: 'Squirtle',
    imgUrl: '../images/007.png'
  },
  {
    name: 'Charmander',
    imgUrl: '../images/004.png'
  },
  {
    name: 'Jigglypuff',
    imgUrl: '../images/039.png'
  }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.circleClick = this.circleClick.bind(this);
    this.carouselInterval = this.carouselInterval.bind(this);
  }

  clickLeft() {
    if (this.state.count === 0) {
      this.setState({
        count: 4
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
    clearInterval(this.timerId);
    this.carouselInterval();
  }

  clickRight() {
    if (this.state.count === 4) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
    clearInterval(this.timerId);
    this.carouselInterval();
  }

  circleClick(event) {
    this.setState({
      count: Number(event.target.id)
    });
    clearInterval(this.timerId);
    this.carouselInterval();
  }

  carouselInterval() {
    this.timerId = setInterval(() => {
      if (this.state.count === 4) {
        this.setState({
          count: 0
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }, 3000);
  }

  componentDidMount() {
    this.carouselInterval();
  }

  render() {
    return (
      <div className='carousel'>
        <div className='display-flex justify-around align-center'>
          <a href="#" onClick={this.clickLeft}>
            <i className="fas fa-chevron-left fa-3x"></i>
          </a>
          <img src={`${images[this.state.count].imgUrl}`} alt="" />
          <a href="#" onClick={this.clickRight}>
            <i className="fas fa-chevron-right fa-3x margin-5"></i>
          </a>
        </div>
        <div className='display-flex justify-center align-center'>
          {
            images.map((name, index) => {
              const dotColor = this.state.count === index
                ? 'fas fa-circle'
                : 'far fa-circle';
              return (
              <i key={index} id={images.name} className={dotColor} onClick={this.circleClick}></i>
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default Carousel;
