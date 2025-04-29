import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskInput from './assets/components/TaskInput.jsx'
import TaskList from './assets/components/TaskList.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
    console.clear(); 
     console.log("Estado actual de las tareas :", tasks);
    const addTask = (text) => {
        const newTask = {
            id: Date.now(), // ID unico usando la fecha del sistema
            texto: text,  // Texto de la tarea
            completado: false // Estado inicial
        }
        setTasks([...tasks, newTask]); // Agrega la nueva tarea al array existente
    }

    const toggleTask = (id) => {
        // Actualiza el estado de la tarea usando setTasks
        setTasks(tasks.map(task =>  // Recorre todas las tareas existentes
            // Si coincide: crea copia de la tarea invirtiendo su estado. Si no coincide: devuelve la tarea sin cambios
            task.id === id ? { ...task, completado: !task.completado } : task 
        ))
    }

    return(
        <div className="tareas-container">
            <h1>Lista de tareas</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} />
        </div>
    )
}

export default App
