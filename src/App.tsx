import { useState } from 'react'
import { Header } from './components/Header'
import { NewTodo } from './components/NewTodo'
import { Todos } from './components/Todos'

import styles from './App.module.css'
import './global.css'

function App() {
  const [tasksTodo, setTasksTodo] = useState([
    {
      content: 'PRIMEIRO TODO PRIMEIRO TODO PRIMEIRO TODO PRIMEIRO TODO PRIMEIRO TODO PRIMEIRO TODO PRIMEIRO TODO ',
      done: false,
      id: 1656970670377
    },
    {
      content: 'SEGUNDO TODO SEGUNDO TODO SEGUNDO TODO SEGUNDO TODO SEGUNDO TODO SEGUNDO TODO SEGUNDO TODO SEGUNDO TODO ',
      done: true,
      id: 1656970670378
    },
    {
      content: 'TERCEIRO TODO TERCEIRO TODO TERCEIRO TODO TERCEIRO TODO TERCEIRO TODO TERCEIRO TODO TERCEIRO TODO ',
      done: true,
      id: 1656970670379
    },
    {
      content: 'QUARTO TODO QUARTO TODO QUARTO TODO QUARTO TODO QUARTO TODO QUARTO TODO QUARTO TODO QUARTO TODO QUARTO TODO ',
      done: false,
      id: 1656970670380
    },
  ])

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

  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewTodo />
        <Todos tasks={tasksTodo} updateTask={updateTask} />
      </main>
    </>
  )
}

export default App
