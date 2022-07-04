import { Header } from './components/Header'
import { NewTodo } from './components/NewTodo'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewTodo />
      </main>
    </>
  )
}

export default App
