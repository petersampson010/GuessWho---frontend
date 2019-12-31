import React from 'react'

export default class CompSide extends React.Component {

    render() {
        return (
            <div className='compside'>
                COMPUTER SAYS {this.props.computer}
            </div>
        )
    }
}