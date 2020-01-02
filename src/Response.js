import React from 'react'
const compSaysNo = require('./OtherImages/compSaysNo.gif')
const yes = require('./OtherImages/Yes.jpg')


export default class Response extends React.Component {

    render() {
        if (this.props.computer === null) {
            return (<p>PLEASE SELECT ALIEN FIRST</p>)
        } else {
            return (
                this.props.computer === "NO" ? <img src={compSaysNo} alt="lil'b" className="myGif"/>
                : <img src={yes} alt="yes" className="Gif"/>
            )
        }
    }
}