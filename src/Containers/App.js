import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Custom-Containers/Persons/Persons'
import Cockpit from '../Custom-Containers/Cockpit/Cockpit'

class App extends Component {
  state = {
    Persons : [{id : "1" , name : "Ajay" , age : 23},
              {id : "2" , name : "Aadhavan" , age : 25},
              {id : "3" , name : "Ashwin" , age : 24}
            ],
    othervalue : "I am a graduate Student",
    displaycontent : false
  };

  

  changeValuesHandler = (event , id) => {
    
    const personIndex = this.state.Persons.findIndex((p) => {
      return id === p.id;
    }) 
    const person =  {...this.state.Persons[personIndex]};
    person.name = event.target.value
    const persons = [...this.state.Persons];
    persons[personIndex] = person 
    
    this.setState({Persons:persons});

    
  };

  deleteperson = (index) =>{
    const arr = [...this.state.Persons];
    arr.splice(index , 1);
    this.setState({Persons: arr});
  }

  togglehandler = () => {
    const display = this.state.displaycontent;
    this.setState({displaycontent : !display})
  }
  

  render() {

    let persons = null; 
    if (this.state.displaycontent){
      persons = <Persons
      persons = {this.state.Persons}
      delete = {this.deleteperson}
      changed = {this.changeValuesHandler}/>
    }
    return (
      <div className = {classes.App}>
        <Cockpit
        display = {this.state.displaycontent}
        toggle = {this.togglehandler}
        persons = {this.state.Persons}/>
        {persons}
      </div> 
    )
  };
}

export default App;
