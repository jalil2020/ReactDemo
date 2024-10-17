import React, { Component } from 'react'
import Person from './items/Person'

function NameList() {

    const persons = [
        {
            id:1,
            name:"Olma",
            color: "red",
            count: 4
        },
        {
            id:2,
            name:"Bannana",
            color: "blue",
            count: 53
        },
        {
            id:3,
            name:"Olcha",
            color: "green",
            count: 423
        },
        {
            id:4,
            name:"Shaftoli",
            color: "red",
            count: 43
        },

    ]


    const names = ["Olma","Bannan","Olchaa"]
    // const nameList = names.map(name=>  <h1>{name}</h1>)
    const peronList = persons.map(person=> (
        <Person key = {person.id} person={person}></Person>
        // <Person(person  = {person})/>
    ))
    return (
      <div>
       {
        peronList
       }
      </div>
    )
}

export default NameList
