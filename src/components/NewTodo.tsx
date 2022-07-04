import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './NewTodo.module.css'

export const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('')

  function hendleNewTodo(event: FormEvent) {
    event.preventDefault()

    console.log(newTodo);

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