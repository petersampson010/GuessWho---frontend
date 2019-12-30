import React from 'react'


export default class EyesModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <form onSubmit={event => this.props.submitEyes(event)}>
                    <p>Do they have 
                        <select name="eyes">
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select> Eyes?</p>
                    <submit>ASK!</submit>
                </form>
            </div>   
        </div>
        )
    }


}