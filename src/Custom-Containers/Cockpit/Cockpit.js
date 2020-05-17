import React from 'react';
import classes from './Cockpit.css'

const Cockpit = ( props ) => {
    let btnClass = '';
    const assignedClass = [];
    
    if (props.display){
      btnClass = classes.Red;
    }
    if (props.persons.length <= 2){
      assignedClass.push(classes.red);
    }
    if (props.persons.length <= 1){
      assignedClass.push(classes.bold);
    }
  
    return (
    <div className = {classes.Cockpit}>    
        <h1> Hello, This is a react app!</h1>
        <p className = {assignedClass.join(' ')}> We learn about react here.</p>
        <button className = {btnClass}
        onClick = {props.toggle}> Update Values </button>
    </div>
    );
};

export default Cockpit;