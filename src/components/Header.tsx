import { RocketIcon } from "../assets/RocketIcon"
import styles from './Header.module.css'

export const Header = () => {

  return (
    <header className={styles.header}>
      <RocketIcon />
      <div className={styles.todo}>
        to<span>do</span>
      </div>
    </header>
  )
}