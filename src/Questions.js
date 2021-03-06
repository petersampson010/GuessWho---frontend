import React from 'react'


export default class Questions extends React.Component {

    render() {
        return (
            <div style={this.props.et === null ? {display: "none"} : null} className='questions'>
                SELECT A CATEGORY FOR YOUR QUESTION
                <br></br>
                <button class="q-font" onClick={(e) => this.props.attributeClick("colour")}>COLOUR</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("number_of_eyes")}>NUMBER OF EYES</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("hat")}>HAT</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("ears")}>EARS</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("horns")}>HORNS</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("hair")}>HAIR</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("fin")}>FIN</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("nose")}>NOSE</button>
                <button class="q-font" onClick={(e) => this.props.attributeClick("eyebrows")}>EYEBROWS</button>
                <br></br>
                <br></br>
                <button className='glow-on-hover' onClick={this.props.takeAGuess}>TAKE A GUESS</button>
            </div>
        )
    }
}