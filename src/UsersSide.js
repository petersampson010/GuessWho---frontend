import React from 'react'
import Card from './Card'

export default class UsersSide extends React.Component {

    render() {
        return (
            <div className='usersside'>
                {this.props.aliens.map((a, i) => <Card key={i} alien={a} />)}
            </div>
        )
    }
}