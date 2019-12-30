import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'

export default class App extends React.Component {

  state = {
    aliens: [
      {
        name: "Albert",
        colour: "green",
        numberEyes: 3,
        hat: true,
        ears: false,
        horns: true, 
        hair: true
      },
      {
        name: "Zed",
        colour: "yellow",
        numberEyes: 1,
        hat: true,
        ears: false,
        horns: true, 
        hair: true
      }
    ]
  }

  fetchAliens = () => {
    fetch()
  }


  render() {
    return (
      <div className="App">
        <TitleBar />
        <MenuBar />
        <Game aliens={this.state.aliens}/>
        <QuestionSection />
      </div>
    )
  }
}
  


