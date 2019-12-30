import React from 'react'


export default class HatModal extends React.Component {

    render() {
        return (
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <form>
                    <p>Are they wearing a Hat?</p>
                    <submit>ASK!</submit>
                </form>
            </div>   
        </div>
        )
    }


}