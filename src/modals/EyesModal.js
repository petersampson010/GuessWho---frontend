import React from 'react'


export default class EyesModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitEyes(event)}>
                    <p>Do they have
                        <select name="eyes" class="modal-body" >
                        <option class="modal-form-button" value="1">1</option>
                        <option class="modal-form-button" value="2">2</option>
                        <option class="modal-form-button" value="3">3</option>
                        <option class="modal-form-button" value="4">4</option>
                        <br></br>
                    </select>Eye(s)?</p>
                    <button class="modal-body" type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }
}