//import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Radium , {StyleRoot} from 'radium'
import Person from './Custom-Containers/Person'


class App extends Component {
  state = {
    Persons : [{id : "1" , name : "Ajay" , age : 23},
              {id : "2" , name : "Aadhavan" , age : 25},
              {id : "3" , name : "Ashwin" , age : 24}
            ],
    othervalue : "I am a graduate Student" 
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
    const style = {
      border : '1px solid black',
      background : 'green',
      font: 'inherit',
      padding: '8px',
      margin: '10px', 
      ':hover' : {
        background : 'lightgreen',
        color : 'white'
      }
      }
    let persons = null;
    
    if (this.state.displaycontent){
      persons = (
        <div>
        {this.state.Persons.map((p , index) => {
          return <Person 
          click = {this.deleteperson.bind(this , index)}
          name = {p.name} 
          age = {p.age}
          key = {p.id}
          change = {(event) => (this.changeValuesHandler(event , p.id))}/>
          })
        }
        </div>
      );
      style.background = "red";
      style[':hover'] =  {
        background : 'lightred',
        color : 'white'
      }
    };
    return (
      <StyleRoot>
      <div className="App">
        
        <h1> Hello, This is a react app!</h1>
        <button 
        style = {style}
        onClick = {this.togglehandler}> Update Values </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

// const app  = () => {
//   const [this.state , setthis.state] = useState({
//     Persons : [{name : "Ajay" , age : 23},
//               {name : "Aadhavan" , age : 25},
//               {name : "Ashwin" , age : 24}
//             ],
//     othervalue : "I am a graduate Student" 
//   });
//   const switchValuesHandler = () => {
//     setthis.state(
//       {Persons : [{name : "Ajay" , age : 23},
//               {name : "Aadhavan" , age : 25},
//               {name : "Arun" , age : 22}
//             ],
//         othervalue : "I am a graduate Student of ASU"
//       }
//     );
//   };
//   return (
//     <div className="App">   
//       <h1> Hello, This is a react app!</h1>
//       <button onClick = {this.switchValuesHandler.bind(this , "Farooq")} > Update Values </button>
//       <Person name = {this.state.Persons[0].name} age = {this.state.Persons[0].age}> {this.state.othervalue} </Person>
//       <Person name = {this.state.Persons[1].name} age = {this.state.Persons[1].age}> {this.state.othervalue} </Person>
//       <Person name = {this.state.Persons[2].name} age = {this.state.Persons[2].age}> {this.state.othervalue} </Person>
//     </div>
//   );
// }

// export default app;

