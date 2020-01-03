import React from 'react'
import Response from './Response'
import EndResponse from './EndResponse'

export default class CompSide extends React.Component {

    render() {
        return (
            <div className='compside'>
                {this.props.userguess === null ? <Response computer={this.props.computer}/> : <EndResponse image={this.props.result}/>}
            </div>
        )
    }
}