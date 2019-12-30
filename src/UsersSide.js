import React from 'react'
import Card from './Card'

export default class UsersSide extends React.Component {

    render() {
        return (
            <div className='usersside'>
                {this.props.aliens.map(a => <Card alien={a} />)}
            </div>
        )
    }
}