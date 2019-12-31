import React from 'react';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'

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

  cutAliens = (attr, value) => {

  }

  componentDidMount() {
    this.fetchAliens()
  }

  setEt = () => {
    const randAlien = this.state.aliens[Math.floor(Math.random()*24)];
    this.setState({et: randAlien})
  }

  attributeClick = attr => {
    this.setState({ 
      modals: {...this.state.modals, [attr]: true}
    })
  }

  submitColour = event => {
    event.preventDefault()
    const selectedColour = event.target.colours.value
    console.log(selectedColour)
  }
  submitEyes = event => {
    event.preventDefault()
    const selectedEyes = event.target.eyes.value
    console.log(selectedEyes)
  }
  submitHat = event => {
    event.preventDefault()
  }
  submitEars = event => {
    event.preventDefault()
  }
  submitHorns = event => {
    event.preventDefault()
  }
  submitHair = event => {
    event.preventDefault()
  }
  submitFin = event => {
    event.preventDefault()
  }
  submitNose = event => {
    event.preventDefault()
  }
  submitEyebrows = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <TitleBar />
        <MenuBar />
        <Game aliens={this.state.aliens}/>
        <QuestionSection 
        modals={this.state.modals} 
        setEt={this.setEt} 

        attributeClick={this.attributeClick}
        
        submitColour={this.submitColour}
        submitEyes={this.submitEyes}/>
      </div>
    )
  }
}
  


