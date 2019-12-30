import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'

export default class App extends React.Component {

  state = {
    aliens: [],
    et: null
  }

  fetchAliens = () => {
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(data => this.setState({aliens: data}))
  }

  componentDidMount() {
    this.fetchAliens()
  }

  setEt = () => {
    const randAlien = this.state.aliens[Math.floor(Math.random()*24)];
    this.setState({et: randAlien})
  }

  colourClick = () => {
    present modal 
    
  }

  render() {
    return (
      <div className="App">
        <TitleBar />
        <MenuBar />
        <Game aliens={this.state.aliens}/>
        <QuestionSection setEt={this.setEt}/>
      </div>
    )
  }
}
  


