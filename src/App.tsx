import './global.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { useEffect, useState } from 'react'

export interface Itasks {
  id: string
  content: string
  isComplete: boolean
}

const LOCAL_STOREGE_KEY = 'saveNewTasks'

function App() {
  const [tasks, setTasks] = useState<Itasks[]>([])

  function setTaskLocalStorege(newTasks: Itasks[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STOREGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STOREGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function addTask(taskContent: string) {
    setTaskLocalStorege([
      ...tasks,
      { id: crypto.randomUUID(), content: taskContent, isComplete: false },
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTask = tasks.filter((task) => task.id !== taskId)

    setTaskLocalStorege(newTask)
  }

  function taskCompleteById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })
    setTaskLocalStorege(newTasks)
  }

  return (
    <>
      <Header addTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={taskCompleteById}
      />
    </>
  )
}

export default App
