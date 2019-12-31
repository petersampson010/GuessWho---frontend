import React from 'react';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'

export default class App extends React.Component {

  state = {
    aliens: [],
    et: {
      name: null,
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
    question: null, 
    computer: "nothing"
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
      question: "colour"})
  }
  submitEyes = event => {
    event.preventDefault()
    const selectedEyes = event.target.eyes.value
    this.setState({
      modals: {...this.state.modals, any: false, number_of_eyes: false},
      question: "number_of_eyes"})
  }

  submitQuestion = (event, attr) => {
    event.preventDefault();
    this.setState({
      modals: {...this.state.modals, any: false, [attr]: false},
      question: attr});
      this.answer(attr)
  }

  answer = attr => {
    console.log(this.state.et.attr)
    // this.state.et.attr ? "YES" : "NO"
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
        submitQuestion={this.submitQuestion}/>
      </div>
    )
  }
}
  


