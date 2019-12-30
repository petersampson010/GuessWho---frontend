import React from 'react'
import QuestionButton from './QuestionButton'

export default class Questions extends React.Component {

    render() {
        return (
            <div className='questions'>
                QUESTIONS
                <br></br>
                <button onClick={this.props.colourClick}>COLOUR</button>
                <button onClick={this.props.colourClick}>NUMBER OF EYES</button>
                <button onClick={this.props.colourClick}>HAT</button>
                <button onClick={this.props.colourClick}>EARS</button>
                <button onClick={this.props.colourClick}>HORNS</button>
                <button onClick={this.props.colourClick}>HAIR</button>
                <button onClick={this.props.colourClick}>FIN</button>
                <button onClick={this.props.colourClick}>NOSE</button>
                <button onClick={this.props.colourClick}>EYEBROWS</button>
            </div>
        )
    }
}