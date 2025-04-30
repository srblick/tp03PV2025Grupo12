import { useState } from "react";

function TaskInput({ addTask }){
    // Recibe props:
    // - addTask: Funcion que agrega la tarea al array
    const [texto, setTexto] = useState(''); // Almacen temporal
    
    const controlSubmit = (e) => {
        e.preventDefault();  // Evita recarga de página
        if (texto.trim()){ // Valida que no esté vacío
            addTask(texto); // Llamada a la funcion addTask
        }
        setTexto(''); // Limpia el input
    }
    
    return(
        <div className="input-container">
            <form onSubmit={controlSubmit}>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Nueva tarea..." 
            />
            <button type="submit">Agregar</button>
        </form>

        </div>
    )
}

export default TaskInput;