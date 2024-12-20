import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
  const {list} = props
  return (
    <ul className='main'>
      {list.map((task, index) => {
        return (
          <ToDoCard {...props} key={index} index={index}>
            <p>{task}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}
