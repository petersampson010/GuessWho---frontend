import React from 'react'

const congrats = require('./OtherImages/congratulations.gif')
const nope = require('./OtherImages/no.webp')

export default class EndResponse extends React.Component {


    render() {
        return (
            this.props.image === "Y" ? <img src={congrats} /> : <img src={nope}/>
        )
    }
}