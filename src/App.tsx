import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ShoppingList} from "./ShoppingList.tsx";

export type Task = {
    id: number
    title: string
    completed: boolean

}

function App() {
    const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Mela', completed: true },
    { id: 2, title: 'Banana', completed: true },
    { id: 3, title: 'Ananas', completed: false },
  ])
 // let tasks2: Task[] = [
 //     { id: 1, title: 'Farro perlato', completed: true },
  //    { id: 2, title: 'Crusca di avena', completed: false },
 // ]
    const deleteTask = (id: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(filteredTasks)
    }

  return (
    <>
      <ShoppingList title ={"La frutta"} date="15.02.2025" tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App
