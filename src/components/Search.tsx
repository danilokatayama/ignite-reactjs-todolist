import { PlusCircle } from 'phosphor-react'
import styles from './Search.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface SearchProps {
  onAddNewTodo: (toDoDescription: string) => void;
}

export function Search({
  onAddNewTodo
}: SearchProps) {
  const [description, setDescription] = useState('');

  function handleAddNewTodo(event: FormEvent) {
    event.preventDefault()
    onAddNewTodo(description)
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  return (
    <form 
      className={styles.search}
      onSubmit={handleAddNewTodo}
    >
      <input 
        type="text" 
        placeholder='Add a new task' 
        name='description' 
        value={description}
        onChange={handleDescriptionChange}
      />

      <button
        type='submit'
      >
        Criar
        <PlusCircle
          size={16}
          weight='bold'
        />
      </button>
    </form>
  )
}