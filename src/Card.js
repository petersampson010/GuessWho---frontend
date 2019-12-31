import React from 'react'

export default class Card extends React.Component {

    state = {
        flipped: false 
    }
    render() {
        const imgName = this.props.alien.name + '.png'
        const imgSrc = require(`./AlienImages/` + imgName)
        const guessCardSrc = require('./OtherImages/GuessCard.png')
        return (
            <div className="Card" onClick={() => this.setState({flipped: !this.state.flipped})}>
                {this.state.flipped ? 
                <img className="image" src={guessCardSrc}></img>
                : <img className="image" src={imgSrc}></img>}
            </div>
        )
    }
}