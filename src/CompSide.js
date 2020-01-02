import React from 'react'
import Response from './Response'

export default class CompSide extends React.Component {

    render() {
        return (
            <div className='compside'>
                {this.props.userguess === null ? <Response computer={this.props.computer}/> : this.props.result}
            </div>
        )
    }
}