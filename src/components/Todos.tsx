import styles from './Todos.module.css'

export const Todos = () => {

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

      <div className={styles.list}>
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
    </section>
  )
}