import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar'
import TitleBar from './TitleBar'
import Game from './Game'
import QuestionSection from './QuestionSection'

export default class App extends React.Component {

  fetchAliens = () => {
    fetch()
  }


  render() {
    return (
      <div className="App">
        <TitleBar />
        <MenuBar />
        <Game />
        <QuestionSection />
      </div>
    )
  }
}
  


