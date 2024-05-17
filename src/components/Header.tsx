import styles from './Header.module.css'
import logo from '../assets/Logo.svg'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  addTask: (taskContent: string) => void
}

function Header({ addTask }: Props) {
  const [content, setContent] = useState('')

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    addTask(content)
    setContent('')
  }

  function handleAddContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  return (
    <header className={styles.container}>
      <img src={logo} alt="logo" />
      <form className={styles.formContainer} onSubmit={handleAddTask}>
        <input
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          onChange={handleAddContent}
          value={content}
        />
        <button className={styles.btn}>
          Criar <PlusCircle size={24} />
        </button>
      </form>
    </header>
  )
}

export { Header }
