import React from 'react'


export default class HornsModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <form>
                    <p>Do they have Horns?</p>
                    <submit>ASK!</submit>
                </form>
            </div>   
        </div>
        )
    }


}