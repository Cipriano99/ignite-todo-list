import { NoTasks } from './NoTasks'
import { Task } from './Task'
import styles from './Todos.module.css'

interface ITask {
  content: string
  done: boolean
  id: number
}

interface TodoProps {
  tasks: ITask[]
  updateTask: (id: number, type: string) => void
}

export const Todos = ({ tasks, updateTask }: TodoProps) => {
  const tasksSortByNoDone = tasks.sort((a, b) => Number(a.done) - Number(b.done));

  const tasksDones = tasks.filter(task => task.done === true)

  return (
    <section className={styles.todos}>
      <div className={styles.infos}>
        <div className={styles.tasks}>
          Tarefas
          <span>{tasks.length}</span>
        </div>

        <div className={styles.dones}>
          Concluídas
          <span>{tasksDones.length} de {tasks.length}</span>
        </div>
      </div>

      {
        tasksSortByNoDone.length > 0
          ? tasksSortByNoDone.map(
            task =>
              <Task
                key={task.id}
                data={task}
                updateTask={updateTask}
              />
          )
          : <NoTasks />
      }
    </section>
  )
}