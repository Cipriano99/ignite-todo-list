import { useState } from 'react'
import { Header } from './components/Header'
import { NewTodo } from './components/NewTodo'
import { Todos } from './components/Todos'

import styles from './App.module.css'
import './global.css'

import { ITask } from './types'

function App() {
  const [tasksTodo, setTasksTodo] = useState<ITask[]>([])

  function updateTask(id: number, type: string) {
    if (type === 'check') {
      handleCheckTaskDone(id)
    }

    if (type === 'delete') {
      handleDeleteTask(id)
    }
  }

  function handleCheckTaskDone(id: number) {
    setTasksTodo(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }
        return task
      })
      return updatedTasks
    })
  }

  function handleDeleteTask(id: number) {
    setTasksTodo(prevTasks => prevTasks.filter(tasks => tasks.id !== id))
  }

  function addNewTodo(task: ITask) {
    setTasksTodo(prevTasks => [...prevTasks, task])
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewTodo addNewTodo={addNewTodo} />
        <Todos tasks={tasksTodo} updateTask={updateTask} />
      </main>
    </>
  )
}

export default App
