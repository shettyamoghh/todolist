import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function handleAdd(newTask) {
    const newList = [...list, newTask]
    setList(newList)
  }

  function handleDelete(index) {
    const newList = list.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    setList(newList)
  }

  function handleEdit(index) {
    const editedTask = list[index]
    setTask(editedTask)
    handleDelete(index)
  }

  return (
    <>
      <ToDoInput task={task} setTask={setTask} handleAdd={handleAdd}/>
      <ToDoList handleEdit={handleEdit} handleDelete={handleDelete} list={list} />
    </>
  )
}

export default App