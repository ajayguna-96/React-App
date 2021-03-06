import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';



const Person = (props) => {
    
    return (
    <div className ={classes.Person}>
        <p onClick = {props.click}>"My Name is {props.name} and I am {props.age} years old."</p>
        <p>{props.children}</p>
        <input onChange = {props.change} value = {props.name} />
    </div> 
    ); 
};

export default Person;