import React from 'react'
import CompSide from './CompSide'
import UsersSide from './UsersSide'

export default class Game extends React.Component {

    render() {
        return (
            <div className='game'>
                <CompSide computer={this.props.computer}/>
                <UsersSide aliens={this.props.aliens}/>
            </div>
        )
    }
}