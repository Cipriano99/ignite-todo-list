import { Header } from './components/Header'
import { NewTodo } from './components/NewTodo'
import { Todos } from './components/Todos'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewTodo />
        <Todos />
      </main>
    </>
  )
}

export default App
