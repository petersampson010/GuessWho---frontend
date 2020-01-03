import React from 'react'

const congrats = require('./OtherImages/congratulations.gif')
const nope = require('./OtherImages/no.webp')

export default class EndResponse extends React.Component {


    render() {
        return (
            this.props.image === "Y" ? <img className="leo" src={congrats} /> : <img className="noGif" src={nope}/>
        )
    }
}