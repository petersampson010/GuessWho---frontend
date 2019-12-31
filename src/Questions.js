import React from 'react'
import QuestionButton from './QuestionButton'
import ColourModal from './modals/ColourModal'
import EyesModal from './modals/EyesModal'
import HatModal from './modals/HatModal'
import EarsModal from './modals/EarsModal'
import HornsModal from './modals/HornsModal'
import HairModal from './modals/HairModal'
import FinModal from './modals/FinModal'
import NoseModal from './modals/NoseModal'
import EyebrowsModal from './modals/EyebrowsModal'






export default class Questions extends React.Component {

    render() {
        return (
            <div className='questions'>
                QUESTIONS
                <br></br>
                {this.props.modals.colour ? <ColourModal submitColour={this.props.submitColour}/> : <button onClick={(e) => this.props.attributeClick("colour")}>COLOUR</button>}
                {this.props.modals.number_of_eyes ? <EyesModal submitEyes={this.props.submitEyes}/> : <button onClick={(e) => this.props.attributeClick("number_of_eyes")}>NUMBER OF EYES</button>}
                {this.props.modals.hat ? <HatModal /> : <button onClick={(e) => this.props.attributeClick("hat")}>HAT</button>}
                {this.props.modals.ears ? <EarsModal /> : <button onClick={(e) => this.props.attributeClick("ears")}>EARS</button>}
                {this.props.modals.horns ? <HornsModal /> : <button onClick={(e) => this.props.attributeClick("horns")}>HORNS</button>}
                {this.props.modals.hair ? <HairModal /> : <button onClick={(e) => this.props.attributeClick("hair")}>HAIR</button>}
                {this.props.modals.fin ? <FinModal /> : <button onClick={(e) => this.props.attributeClick("fin")}>FIN</button>}
                {this.props.modals.nose ? <NoseModal /> : <button onClick={(e) => this.props.attributeClick("nose")}>NOSE</button>}
                {this.props.modals.eyebrows ? <EyebrowsModal /> : <button onClick={(e) => this.props.attributeClick("eyebrows")}>EYEBROWS</button>}
                <br></br>
                <br></br>
                <button className='glow-on-hover'>TAKE A GUESS</button>
            </div>
        )
    }
}