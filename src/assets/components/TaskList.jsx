import TaskItem from './TaskItem'


function TaskList({ tasks, toggleTask, deleteTask }) {
    // Recibe props:
    // - tasks: Array de objetos de tareas
    // - toggleTask: funcion para cambiar estado
    // - deleteTask: funcion para eliminar tarea
    return (
        <div className='list-container'>
            <ul>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    toggleTask={toggleTask} 
                    deleteTask={deleteTask}
                />
            ))}
            </ul>
        </div>
    )
}

export default TaskList;