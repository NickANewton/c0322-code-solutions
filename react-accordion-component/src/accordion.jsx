import React from 'react';

const rustItems = [
  { name: 'Recycler', description: 'A machine found in most radtowns which can break items into ~50% of their constituency. Items which have constituent materials that they require only one of will have a 50% chance to retrieve the constituent from recycling. Players finding themselves with excess components may use the Recycler to break them down into raw resources.' },
  { name: 'Rocket Launcher', description: 'The Rocket Launcher is a utility weapon which is primarily used for raiding and base defense. It fires a single rocket at a time and must be reloaded between uses. When loaded with regular Rockets, it can be utilized as an end-game raiding tool, capable of damaging multiple building parts at once. If loaded with Incendiary Rockets, the Rocket Launcher may be used as an area denial tool to spread fire to an area to prevent movement through it. Regular rockets or High Velocity Rockets may also be used as an efficient, but expensive, weapon to be used against players, as its high damage usually means an instant kill.' },
  { name: 'Sheet Metal Door', description: 'The Sheet Metal Door is the most common door found on bases due to its resistances to melee weapons and fire but relatively cheap cost to craft. Regardless, it is still relatively weak to explosives compared to its expensive indirect upgrade, the Armoured Door.' },
  { name: 'Camp Fire', description: 'A basic survival tool - used to cook food, smelt tin cans, keep warm, provide comfort to players, and light up dark areas.' },
  { name: 'Scrap', description: 'Resource mainly used for researching items into blueprints at workbenches or going down the tech tree, which allows for targeting certain items you want to acquire. It is also a type of currency, used for trading various items at the Scientist Outpost and the Bandit Camp. As such, Scrap is very valuable and essential at any point in the game.' }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };
    this.isClicked = this.isClicked.bind(this);
  }

  isClicked(event) {
    const topicName = event.target.getAttribute('data-topic-name');
    if (topicName === this.state.index) {
      this.setState({
        index: null
      });
    } else {
      this.setState({
        index: topicName
      });
    }
  }

  render() {
    let hidden;
    return (
      <ul className='li-styles-none'>
        {rustItems.map((rustItem, index) => {
          if (this.state.index === rustItem.name) {
            hidden = '';
          } else {
            hidden = 'hidden';
          }
          return (
            <li key={index.toString()} id={index}>
              <div className='header'>
                <h1 data-topic-name={rustItem.name} onClick={this.isClicked}>{rustItem.name}</h1>
              </div>
              <div className={`header ${hidden}`}>
                <p>{rustItem.description}</p>
              </div>
            </li>
          );
        })
        }
      </ul>
    );
  }
}

export default Accordion;
