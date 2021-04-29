import React, {Component} from 'react'
import Card from '../Card/Card'
import '../App.css';
import DrawButton from '../DrawButton/DrawButton'
import firebase from 'firebase/app'
import 'firebase/database'

import {DB_CONFIG} from '../Config/Firebase/db_config'

class MecânicaQuântica extends Component{
  constructor(props){
    super(props);

    //this.app = firebase.initializeApp(DB_CONFIG)
    if (!firebase.apps.length){
      this.app = firebase.initializeApp(DB_CONFIG)
    } else{
      this.app = firebase.app()
    }

    this.database = this.app.database().ref().child('mecânica_quântica')

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards:[],
      currentCard:{}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id:snap.key,
        p:snap.val().p,
        a:snap.val().a,
      })

      this.setState({
        cards:currentCards,
        currentCard:this.getRandomCard(currentCards)
      })
    })
  }

  getRandomCard(currentCards){
    var card=currentCards[Math.floor(Math.random()*currentCards.length)]
    return(card)
  }

  updateCard(){
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render(){
    return(
      <div className="App">
        <div className="cardRow">
          <Card p={this.state.currentCard.p} a={this.state.currentCard.a}/>
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}

export default MecânicaQuântica;
