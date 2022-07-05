import styles from './NoTasks.module.css'

import clipboard from '../assets/Clipboard.png'

export const NoTasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.noTodo}>
        <img src={clipboard} alt="Sem atividades" />

        <strong>
          Você ainda não tem tarefas cadastradas
        </strong>

        <span>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>

  )
}