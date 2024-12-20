import React, { useState } from 'react'

export default function ToDoInput(props) {
  const {handleAdd, task, setTask} = props
  return (
    <header>
      <input value={task} onChange={(e) => {
        setTask(e.target.value)
      }} placeholder='Enter task...'/>
      <button onClick={() => {
        handleAdd(task)
        setTask('')
      }}>Add</button>
    </header>
  )
}
