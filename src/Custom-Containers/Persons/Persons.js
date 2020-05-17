import React from 'react';
import Person from './Person/Person'

const Persons = (props) => (

    props.persons.map((p , index) => <Person 
        click = {() => props.delete(index)}
        name = {p.name} 
        age = {p.age}
        key = {p.id}
        change = {(event) => (props.changed(event , p.id))}/>
        )
);

export default Persons;