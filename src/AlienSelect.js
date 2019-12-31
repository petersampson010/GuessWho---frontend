import React from 'react'

export default class AlienSelect extends React.Component {

    render() {
        const guessCardSrc = require('./OtherImages/GuessCard.png')
        return (
            <div className='selectalien'>
                {this.props.et === null ? <button className='glow-on-hover' onClick={this.props.setEt}>SELECT AN ALIEN</button> : <img className='guessCard' src={guessCardSrc}/>}
            </div>
        )
    }
}