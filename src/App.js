import React from 'react';
import './App.css';
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'


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
    computer: null,
    guess: false,
    userguess: null,
    result: ""
  }

  fetchAliens = () => {
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(data => this.setState({aliens: data}))
  }

  componentDidMount() {
    this.fetchAliens();
    this.setState({computer: null})
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
      modals: {...this.state.modals, any: false, colour: false},
      userguess: null
    });
    this.state.et.colour === selectedColour ? this.setState({computer: "YES"}) : this.setState({computer: "NO"})
  }
  
  submitEyes = event => {
    event.preventDefault();
    const selectedEyes = event.target.eyes.value
    this.setState({
      modals: {...this.state.modals, any: false, number_of_eyes: false},
      userguess: null
    });
    this.state.et.number_of_eyes === parseInt(selectedEyes) ? this.setState({computer: "YES"}) : this.setState({computer: "NO"})
  }

  submitQuestion = (event, attr) => {
    event.preventDefault();
    const attrAsked = attr
    this.setState({
      modals: {...this.state.modals, any: false, [attrAsked]: false},
      userguess: null
    });
    this.state.et[attrAsked] ? this.setState({computer: "YES"}) : this.setState({computer: "NO"})
  }

  takeAGuess = () => {
    this.setState({guess: true});
  }

  submitGuess = event => {
    event.preventDefault();
    this.setState({guess: false, userguess: event.target.userguess.value});
    this.state.et.name.toLowerCase() == event.target.userguess.value.toLowerCase() ? 
    this.setState({result: "Y"})
    : this.setState({result: "N"})
  }

  render() {
    return (
      <div className="App">
          <TitleBar />
          <Game 
          computer={this.state.computer} 
          aliens={this.state.aliens}
          userguess={this.state.userguess}
          result={this.state.result}/>
          <QuestionSection 
          modals={this.state.modals} 
          et={this.state.et}
          setEt={this.setEt} 
          result={this.state.result}

          attributeClick={this.attributeClick}
        
          submitColour={this.submitColour}
          submitEyes={this.submitEyes}
          submitQuestion={this.submitQuestion}

          takeAGuess={this.takeAGuess}
          guess={this.state.guess}
          submitGuess={this.submitGuess}/>
        </div>
    )
  }
}

  


