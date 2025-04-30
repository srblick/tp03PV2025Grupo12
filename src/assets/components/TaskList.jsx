import TaskItem from './TaskItem'

function TaskList({ tasks, toggleTask }) {
    // Recibe props:
    // - tasks: Array de objetos de tareas
    // - toggleTask: Funcion para cambiar estado completado/pendiente
    return (
        <div className='list-container'>
            <ul>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    toggleTask={toggleTask} 
                />
            ))}
            </ul>
        </div>
    )
}

export default TaskList;