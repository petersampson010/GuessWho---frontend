import React from 'react'


export default class EyebrowsModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <form onSubmit={event => this.props.submitQuestion(event, "eyebrows")}>
                    <p>Do they have Eyebrows?</p>
                    <button type="submit">ASK!</button>
                </form>
            </div>   
        </div>
        )
    }


}