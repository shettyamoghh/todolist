import React, { useState } from 'react'

export default function ToDoInput(props) {
  const { handleAdd } = props
  const [task, setTask] = useState('')
  return (
    <header>
      <input value={task} onChange={(e) => {
        setTask(e.target.value)
      }} placeholder='Enter task...'/>
      <button onClick={() => {
        handleAdd(task)
      }}>Add</button>
    </header>
  )
}
