import React from 'react'


export default class FinModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitQuestion(event, "fin")}>
                    <p>Do they have a Fin?</p>
                    <button class="modal-body" type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }


}