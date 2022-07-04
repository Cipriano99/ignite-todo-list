import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './NewTodo.module.css'

interface ITask {
  content: string
  done: boolean
  id: number
}

interface NewTodoProps {
  addNewTodo: (tasks: ITask) => void
}

export const NewTodo = ({ addNewTodo }: NewTodoProps) => {
  const [newTodo, setNewTodo] = useState('')

  function hendleNewTodo(event: FormEvent) {
    event.preventDefault()

    addNewTodo({
      content: newTodo,
      done: false,
      id: Date.now()
    })

    setNewTodo('')
  }

  return (
    <form onSubmit={hendleNewTodo} className={styles.form}>
      <input
        placeholder='Adicione uma nova tarefa'
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button type='submit'>
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}