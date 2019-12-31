import React from 'react' 
import ColourModal from './ColourModal'
import EyesModal from './EyesModal'
import HatModal from './HatModal'
import EarsModal from './EarsModal'
import HornsModal from './HornsModal'
import HairModal from './HairModal'
import FinModal from './FinModal'
import NoseModal from './NoseModal'
import EyebrowsModal from './EyebrowsModal'

export default class Modal extends React.Component {


    render() {
        return (
            <div>
                {this.props.modals.colour ? <ColourModal submitColour={this.props.submitColour}/> : null}
                {this.props.modals.number_of_eyes ? <EyesModal submitEyes={this.props.submitEyes}/> : null}
                {this.props.modals.hat ? <HatModal submitQuestion={this.props.submitQuestion}/> : null}
                {this.props.modals.ears ? <EarsModal submitQuestion={this.props.submitQuestion}/> : null}
                {this.props.modals.horns ? <HornsModal submitQuestion={this.props.submitQuestion}/> : null}
                {this.props.modals.hair ? <HairModal submitQuestion={this.props.submitQuestion}/> : null}
                {this.props.modals.fin  ? <FinModal submitQuestion={this.props.submitQuestion}/> : null}
                {this.props.modals.nose  ? <NoseModal submitQuestion={this.props.submitQuestion}/> : null}
                {this.props.modals.eyebrows ? <EyebrowsModal submitQuestion={this.props.submitQuestion}/> : null}

            </div>
        )
    }
}


