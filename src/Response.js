import React from 'react'
const compSaysNo = require('./OtherImages/compSaysNo.gif')
const yes = require('./OtherImages/Yes.jpg')


export default class Response extends React.Component {

    render() {
        return (
            this.props.computer === "NO" ? <img src={compSaysNo} alt="lil'b" className="myGif"/>
            : <img src={yes} alt="yes" className="yesGif"/>
        )
    }
}