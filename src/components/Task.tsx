import { Itasks } from '../App'
import styles from './Task.module.css'
import { Trash, CheckCircle } from '@phosphor-icons/react'

interface Props {
  tasks: Itasks
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

function Task({ tasks, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(tasks.id)}
      >
        {tasks.isComplete ? <CheckCircle /> : <div></div>}
      </button>
      <p className={tasks.isComplete ? styles.textComplete : ''}>
        {tasks.content}
      </p>

      <button className={styles.btnDelete} onClick={() => onDelete(tasks.id)}>
        <Trash />
      </button>
    </div>
  )
}

export { Task }
