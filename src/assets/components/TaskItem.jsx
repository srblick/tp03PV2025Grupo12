
function TaskItem({ task, toggleTask }){
    // Recibe dos props:
    // - task: objeto con { id, texto, completado }
    // - toggleTask: funcion para cambiar estado
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
            <button>Eliminar</button>
            </li>
        </div>
    )
}

export default TaskItem;