import { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

let nextId = 3
const initialTasks = [
  { id: 0, text: "Go buy pasta and eggs" },
  { id: 1, text: "Walk the dog" },
  { id: 2, text: "Clean the bathroom" }
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(text) {
    setTasks(
      tasks.concat([{id: nextId++, text: text}])
    )
  }

  function handleDeleteTask(id) {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  return (
    <>
      <h2>Task List!</h2>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    </>
  )
}

export default App