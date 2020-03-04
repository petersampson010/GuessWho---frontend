import React from 'react'


export default class HornsModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitQuestion(event, "horns")}>
                    <p>Do they have Horns?</p>
                    <button class="modal-body" type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }


}