import React from 'react'
import QuestionButton from './QuestionButton'
import ColourModal from './ColourModal'

export default class Questions extends React.Component {

    render() {
        return (
            <div className='questions'>
                QUESTIONS
                <br></br>
                {this.props.modals.colour ? <ColourModal /> : null }
                <button onClick={this.props.colourClick}>COLOUR</button>
                {/* <button onClick={this.props.eyesClick}>NUMBER OF EYES</button>
                <button onClick={this.props.hatClick}>HAT</button>
                <button onClick={this.props.earsClick}>EARS</button>
                <button onClick={this.props.hornsClick}>HORNS</button>
                <button onClick={this.props.hairClick}>HAIR</button>
                <button onClick={this.props.finClick}>FIN</button>
                <button onClick={this.props.noseClick}>NOSE</button>
                <button onClick={this.props.eyebrowsClick}>EYEBROWS</button> */}
            </div>
        )
    }
}