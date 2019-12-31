import React from 'react'


export default class HatModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitQuestion(event, "hat")}>
                    <p>Are they wearing a Hat?</p>
                    <button type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }


}