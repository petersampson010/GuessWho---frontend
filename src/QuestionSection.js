import React from 'react';
import AlienSelect from './AlienSelect'
import Questions from './Questions'

export default class QuestionSection extends React.Component {

    render() {
        return (
            <div className='questionsection'>
                <AlienSelect setEt={this.props.setEt}/>
                <Questions 
                modals={this.props.modals} 

                attributeClick={this.props.attributeClick}
                
                submitColour={this.props.submitColour}
                submitEyes={this.props.submitEyes}/>
            </div>
        )
    }
}