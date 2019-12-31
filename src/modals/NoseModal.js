import React from 'react'


export default class NoseModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitQuestion(event, "nose")}>
                    <p>Do they have a Nose?</p>
                    <button type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }
}