import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'
import ColourModal from './ColourModal'

export default class App extends React.Component {

  state = {
    aliens: [],
    et: null,
    modals: {
      colour: false,
      number_of_eyes: false,
      hat: false,
      ears: false,
      horns: false,
      hair: false,
      fin: false,
      nose: false,
      eyebrows: false
    }
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
    this.setState({ modals: {...this.state.modals, colour: true }} )
  }

  render() {
    return (
      <div className="App">
        <TitleBar />
        <MenuBar />
        <Game aliens={this.state.aliens}/>
        <QuestionSection modals={this.state.modals} setEt={this.setEt} colourClick={this.colourClick} />
      </div>
    )
  }
}
  


