import React from 'react'

export default class QuestionButton extends React.Component {

    render() {
        return (
            <div className='questionbutton'>
                <button>{this.props.name}</button>
            </div>
        )
    }
}