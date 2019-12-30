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

                colourClick={this.props.colourClick}
                eyesClick={this.props.eyesClick}
                hatClick={this.props.hatClick}
                earsClick={this.props.earsClick}
                hornsClick={this.props.hornsClick}
                hairClick={this.props.hairClick}
                finClick={this.props.finClick}
                noseClick={this.props.noseClick}
                eyebrowsClick={this.props.eyebrowsClick}
                
                submitColour={this.props.submitColour}
                submitEyes={this.props.submitEyes}/>
            </div>
        )
    }
}