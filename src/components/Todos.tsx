import { NoTasks } from './NoTasks'
import { Task } from './Task'
import styles from './Todos.module.css'

export const Todos = () => {
  const tasks = [1]

  return (
    <section className={styles.todos}>
      <div className={styles.infos}>
        <div className={styles.tasks}>
          Tarefas
          <span>0</span>
        </div>

        <div className={styles.dones}>
          Concluídas
          <span>0</span>
        </div>
      </div>

      {
        tasks.length > 0
          ? tasks.map(task => <Task key={task} />)
          : <NoTasks />
      }
    </section>
  )
}