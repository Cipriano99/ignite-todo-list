import styles from './NoTasks.module.css'

export const NoTasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.noTodo}>
        <img src="/src/assets/Clipboard.png" alt="Sem atividades" />

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