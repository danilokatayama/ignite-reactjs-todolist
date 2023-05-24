import { ToDo, ToDoType } from './ToDo'
import styles from './ToDoList.module.css'

interface ToDoListProps {
  toDoList: ToDoType[],
  checkToDo: (id: string) => void,
  deleteToDo: (description: string) => void
}

export function ToDoList({ toDoList, checkToDo, deleteToDo }: ToDoListProps) {
  const doneToDoCount = toDoList.filter(toDo => toDo.done).length

  return (
    <div className={styles.toDoList}>
      <header>
        <div className={styles.left}>
          <strong>Tarefas criadas</strong>
          <div className={styles.badge}><span>{toDoList.length}</span></div>
        </div>

        <div className={styles.right}>
          <strong>Concluídas</strong>
          <div className={styles.badge}><span>{doneToDoCount} de {toDoList.length}</span></div>
        </div>
      </header>

      <section>
        <ul>
          {toDoList.map((toDo) => {
            return (
              <ToDo
                key={toDo.id}
                toDo={toDo}
                onCheckToDo={checkToDo}
                onDeleteToDo={deleteToDo}
              />
            )
          })}
        </ul>
      </section>
    </div>
  )
}