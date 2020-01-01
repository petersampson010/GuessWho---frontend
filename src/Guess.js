import React from 'react'

export default class Guess extends React.Component {


    render() {
        return (
            <div className="modal-content">
                <div class="modal-header">
                    <form onSubmit={event => this.props.submitGuess(event)}>
                        <input name="userguess" placeholder="Name your alien here.."></input>
                    </form>
                </div>
            </div>
        )
    }
}