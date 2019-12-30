import React from 'react'

export default class AlienSelect extends React.Component {

    render() {
        return (
            <div className='selectalien'>
                ALIEN SELECT
                <br></br>
                <button className='glow-on-hover' onClick={this.props.setEt}>SELECT AN ALIEN </button>
            </div>
        )
    }
}