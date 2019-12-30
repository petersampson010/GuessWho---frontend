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

  colourClick = () => {
    this.setState({ modals: {...this.state.modals, colour: true }} )
  }
  eyesClick = () => {
    this.setState({ modals: {...this.state.modals, number_of_eyes: true }} )
  }
  hatClick = () => {
    this.setState({ modals: {...this.state.modals, hat: true }} )
  }
  earsClick = () => {
    this.setState({ modals: {...this.state.modals, ears: true }} )
  }
  hornsClick = () => {
    this.setState({ modals: {...this.state.modals, horns: true }} )
  }
  hairClick = () => {
    this.setState({ modals: {...this.state.modals, hair: true }} )
  }
  finClick = () => {
    this.setState({ modals: {...this.state.modals, fin: true }} )
  }
  noseClick = () => {
    this.setState({ modals: {...this.state.modals, nose: true }} )
  }
  eyebrowsClick = () => {
    this.setState({ modals: {...this.state.modals, eyebrows: true }} )
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

        colourClick={this.colourClick} 
        eyesClick={this.eyesClick}
        hatClick={this.hatClick}
        earsClick={this.earsClick}
        hornsClick={this.hornsClick}
        hairClick={this.hairClick}
        finClick={this.finClick}
        noseClick={this.noseClick}
        eyebrowsClick={this.eyebrowsClick}
        
        submitColour={this.submitColour}
        submitEyes={this.submitEyes}/>
      </div>
    )
  }
}
  


