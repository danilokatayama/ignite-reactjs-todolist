import { Header } from './components/Header'
import { Search } from './components/Search'
import './global.css'
import styles from './App.module.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToDoType } from './components/ToDo';
import { ToDoList } from './components/ToDoList';


const toDoListInitialState: ToDoType[] = [
  {
    id: uuidv4(),
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: false
  },
  {
    id: uuidv4(),
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: true
  },
  {
    id: uuidv4(),
    description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: true
  }
]

export function App() {
  const [toDoList, setToDoList] = useState(toDoListInitialState)

  function addNewTodo(description: string) {
    setToDoList(state => [...state, {
      id: uuidv4(),
      description,
      done: false
    }])
  }

  function checkToDo(id: string) {
    const updatedToDoList = toDoList.map(toDo => {
      return toDo.id === id ? {...toDo, done: !toDo.done} : {...toDo}
    })

    setToDoList(updatedToDoList);
  }

  function deleteToDo(id: string) {
    const toDoListWithoutDeletedOne = toDoList.filter(toDo => {
      return toDo.id !== id
    })

    setToDoList(toDoListWithoutDeletedOne)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Search 
          onAddNewTodo={addNewTodo}
        />
        <main>
          <ToDoList
            toDoList={toDoList}
            checkToDo={checkToDo}
            deleteToDo={deleteToDo}
          />
        </main>
      </div>
    </div>
  )
}