import { useReducer } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

let nextId = 3
const initialTasks = [
  { id: 0, text: "Go buy pasta and eggs" },
  { id: 1, text: "Walk the dog" },
  { id: 2, text: "Clean the bathroom" }
]

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return tasks.concat([{id: action.id, text: action.text}])
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text) {
    dispatch({type: "added", id: nextId++, text: text})
  }

  function handleDeleteTask(id) {
    dispatch({type: "deleted", id: id})
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