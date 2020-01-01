import React from 'react'

export default class CompSide extends React.Component {

    render() {
        return (
            <div className='compside'>
                {this.props.userguess === null ? `COMPUTER SAYS ${this.props.computer}` : this.props.result}
            </div>
        )
    }
}