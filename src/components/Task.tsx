import { CheckCircle, Circle, Trash } from "phosphor-react"
import { useState } from "react"
import styles from './Task.module.css'

interface ITask {
  content: string
  done: boolean
  id: number
}

interface TaskProps {
  data: ITask
  updateTask: (id: number, type: string) => void
}

export const Task = ({ data, updateTask }: TaskProps) => {

  function handleCheckTask() {
    updateTask(data.id, 'check')
  }

  function handleDeleteTask() {
    updateTask(data.id, 'delete')
  }


  return (
    <div className={styles.task}>
      <div className={styles.checkbox} onClick={handleCheckTask}>
        <input type='checkbox' checked={data.done} onChange={() => { }} />
        {
          data.done ? <CheckCircle weight="fill" size={24} /> : <Circle size={24} />
        }
      </div>

      <p className={data.done ? styles.overline : ''}>
        {data.content}
      </p>

      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}