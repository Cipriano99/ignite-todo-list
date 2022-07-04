import { CheckCircle, Circle, Trash } from "phosphor-react"
import { useState } from "react"
import styles from './Task.module.css'

export const Task = () => {
  const [checked, setChecked] = useState(true)

  function handleCheckTask() {
    setChecked(!checked)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkbox} onClick={handleCheckTask}>
        <input type='checkbox' checked={checked} onChange={handleCheckTask} />
        {
          checked ? <CheckCircle weight="fill" size={24} /> : <Circle size={24} />
        }
      </div>

      <p className={checked ? styles.overline : ''}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>

      <button>
        <Trash />
      </button>
    </div>
  )
}