import React from 'react'


export default class ColourModal extends React.Component{

    render() {
        return (
                    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <form>
            <h2>Are they ? 
                <select name="colours">
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                </select></h2>
                <submit></submit>
                </form>
        </div>   
        </div>
        )
    }


}