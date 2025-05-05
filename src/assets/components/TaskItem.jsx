
function TaskItem({ task, toggleTask, deleteTask }){
    // Recibe dos props:
    // - task: objeto con { id, texto, completado }
    // - toggleTask: funcion para cambiar estado
    // - deleteTask: funcion para eliminar tarea
    return(
        <div className="item-container">
            <li>
            <input
                type="checkbox"
                checked={task.completado}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completado ? 'line-through' : 'none' }}>
                {task.texto}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
        </div>
    )
}

export default TaskItem;