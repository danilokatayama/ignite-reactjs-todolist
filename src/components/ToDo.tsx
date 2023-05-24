import styles from './ToDo.module.css'

import { useState } from "react";
import { CheckCircle, Circle, Trash } from "phosphor-react"

export interface ToDoType {
  id: string;
  description: string;
  done: boolean;
}

interface ToDoProps {
  toDo: ToDoType;
  onCheckToDo: (id: string) => void,
  onDeleteToDo: (id: string) => void
}

export function ToDo({
  toDo,
  onCheckToDo,
  onDeleteToDo
}: ToDoProps) {
  function handleCheckChangeTodo() {
    onCheckToDo(toDo.id)
  }

  function handleDeleteTodo() {
    onDeleteToDo(toDo.id)
  }
  
  return (
    <li className={styles.toDo}>
      { toDo.done ? 
        <CheckCircle className={styles.doneIcon} size={24}/> : 
        <Circle className={styles.onGoingIcon} size={24}/>
      }

      <label data-isdone={toDo.done}>
        {toDo.description}
      </label>
      <input type="checkbox" checked={toDo.done} onChange={handleCheckChangeTodo} name="todo"/>

      <button onClick={handleDeleteTodo}>
        <Trash  className={styles.deleteIcon} size={24} />
      </button>
    </li>
  )
}