import React from 'react'

function Person({person}) {
  return (
    <div>
       <h1>This is mine {person.name}, it is color {person.color} and {person.count}</h1>
    </div>
  )
}

export default Person
