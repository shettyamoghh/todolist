import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [list, setList] = useState([])

  function handleAdd(newTask) {
    const newList = [...list, newTask]
    setList(newList)
  }

  return (
    <>
      <ToDoInput handleAdd={handleAdd}/>
      <ToDoList list={list} />
    </>
  )
}

export default App