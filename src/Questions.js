import React from 'react'
import QuestionButton from './QuestionButton'







export default class Questions extends React.Component {

    render() {
        return (
            <div className='questions'>
                SELECT A CATEGORY FOR YOUR QUESTION
                <br></br>
                <button onClick={(e) => this.props.attributeClick("colour")}>COLOUR</button>
                <button onClick={(e) => this.props.attributeClick("number_of_eyes")}>NUMBER OF EYES</button>
                <button onClick={(e) => this.props.attributeClick("hat")}>HAT</button>
                <button onClick={(e) => this.props.attributeClick("ears")}>EARS</button>
                <button onClick={(e) => this.props.attributeClick("horns")}>HORNS</button>
                <button onClick={(e) => this.props.attributeClick("hair")}>HAIR</button>
                <button onClick={(e) => this.props.attributeClick("fin")}>FIN</button>
                <button onClick={(e) => this.props.attributeClick("nose")}>NOSE</button>
                <button onClick={(e) => this.props.attributeClick("eyebrows")}>EYEBROWS</button>
                <br></br>
                <br></br>
                <button className='glow-on-hover'>TAKE A GUESS</button>
            </div>
        )
    }
}