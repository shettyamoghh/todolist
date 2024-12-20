import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList() {
  let list = [
    'task 1',
    'task 2',
    'task 3'
  ]
  return (
    <ul className='main'>
      {list.map((task, index) => {
        return (
          <ToDoCard key={index}>
            <p>{task}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}
