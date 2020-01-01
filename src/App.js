import React from 'react';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'
import GuessBackdrop from './GuessBackdrop'

export default class App extends React.Component {

  state = {
    aliens: [],
    et: null,
    modals: {
      any: false,
      colour: false,
      number_of_eyes: false,
      hat: false,
      ears: false,
      horns: false,
      hair: false,
      fin: false,
      nose: false,
      eyebrows: false
    },
    computer: "nothing",
    guess: false 
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
    const randAlien = this.state.aliens[Math.floor(Math.random()*23)+1];
    this.setState({et: randAlien})
  }

  attributeClick = attr => {
    this.setState({ 
      modals: {...this.state.modals, any: true, [attr]: true}
    })
  }

  submitColour = event => {
    event.preventDefault();
    const selectedColour = event.target.colours.value;
    this.setState({
      modals: {...this.state.modals, any: false, colour: false}
    });
    this.state.et.colour === selectedColour ? this.setState({computer: "YES"}) : this.setState({computer: "NO"})
  }
  submitEyes = event => {
    event.preventDefault();
    const selectedEyes = event.target.eyes.value
    this.setState({
      modals: {...this.state.modals, any: false, number_of_eyes: false}
    });
    this.state.et.number_of_eyes === parseInt(selectedEyes) ? this.setState({computer: "YES"}) : this.setState({computer: "NO"})
  }

  submitQuestion = (event, attr) => {
    event.preventDefault();
    const attrAsked = attr
    this.setState({
      modals: {...this.state.modals, any: false, [attrAsked]: false}
    });
    this.state.et[attrAsked] ? this.setState({computer: "YES"}) : this.setState({computer: "NO"})
  }

  takeAGuess = () => {
    this.setState({guess: true});
  }

  window.onClick = event => {
    event.target 
  }

  render() {
    return (
      <div className="App">
          <TitleBar />
          <MenuBar />
          <Game computer={this.state.computer} aliens={this.state.aliens}/>
          <QuestionSection 
          modals={this.state.modals} 
          et={this.state.et}
          setEt={this.setEt} 

          attributeClick={this.attributeClick}
        
          submitColour={this.submitColour}
          submitEyes={this.submitEyes}
          submitQuestion={this.submitQuestion}
          takeAGuess={this.takeAGuess}/>
        </div>
    )
  }
}
  


