import React from 'react'

export default class Card extends React.Component {
    render() {
        const imgName = this.props.alien.name + '.png'
        const imgSrc = require(`./AlienImages/` + imgName)
        return (
            <div className="Card">
                <img className="image" src={imgSrc}></img>
            </div>
        )
    }
}