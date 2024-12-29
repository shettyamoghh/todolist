import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import Footer from "./components/Footer"

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function persistData(newList) {
    localStorage.setItem('list', JSON.stringify({ list: newList }))
  }

  function handleAdd(newTask) {
    const newList = [...list, newTask]
    persistData(newList)
    setList(newList)
  }

  function handleDelete(index) {
    const newList = list.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    persistData(newList)
    setList(newList)
  }

  function handleEdit(index) {
    const editedTask = list[index]
    setTask(editedTask)
    handleDelete(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localList = localStorage.getItem('list')
    if (!localList) {
      return
    }

    localList = JSON.parse(localList).list
    setList(localList)

  }, [])

  return (
    <>
      <div className="center">
        <h1>A Simple To-Do List</h1>
      </div>
      <div className="header">
        <h2>by Amogh Shetty</h2>
      </div>
      <div className="center">
        <img src="/staring-window.gif" width="750px"/>
      </div>
      <>
        <ToDoInput task={task} setTask={setTask} handleAdd={handleAdd}/>
        <ToDoList handleEdit={handleEdit} handleDelete={handleDelete} list={list} />
      </>
      <Footer />
    </>
  )
}

export default App