import React from 'react'


export default class HairModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitQuestion(event, "hair")}>
                    <p>Do they have Hair?</p>
                    <button class="modal-body" type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }


}