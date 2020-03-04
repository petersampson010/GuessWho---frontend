import React from 'react'


export default class ColourModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitColour(event)}>
                    <p>Are they 
                    <select name="colours" class="modal-body" >
                        <option  value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                    </select>
                    </p>
                    <button class="modal-body" type='submit'>ASK!</button>
                </form>
            </div>   
        </div>
        )
    }


}