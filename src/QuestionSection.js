import React from 'react';
import AlienSelect from './AlienSelect'
import Questions from './Questions'
import Modal from './modals/Modal'
import Guess from './Guess'

export default class QuestionSection extends React.Component {

    render() {
        return (
            this.props.guess ? 
            <div className='questionsection'>
                <Guess submitGuess={this.props.submitGuess}/>
            </div>
            : <div className='questionsection'>
                <AlienSelect 
                et={this.props.et} 
                setEt={this.props.setEt}
                result={this.props.result}/>
                {this.props.modals.any ? 
                <Modal modals={this.props.modals} 
                submitEyes={this.props.submitEyes}
                submitColour={this.props.submitColour}
                submitQuestion={this.props.submitQuestion}/>
                : <Questions
                attributeClick={this.props.attributeClick}     
                submitColour={this.props.submitColour}
                submitEyes={this.props.submitEyes}
                takeAGuess={this.props.takeAGuess}
                et={this.props.et}/>}
            </div>

        )
    }
}