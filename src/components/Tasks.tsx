import styles from './Tasks.module.css'
import { Task } from './Task'
import { Itasks } from '../App'
import clipBoard from '../assets/Clipboard.svg'

interface Props {
  tasks: Itasks[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length
  const completedTask = tasks.filter((task) => task.isComplete).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTask} de {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            tasks={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.noTasks}>
            <img src={clipBoard} alt="No tasks" />
            <div>
              <p>Você ainda não tem uma tarefa!!</p>
              <span>Crie uma nova tarefa, e organize seu dia.</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

export { Tasks }
