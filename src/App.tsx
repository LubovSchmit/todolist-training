import React, {useState} from 'react';
import style from './App.module.scss';
import {TaskType, Todolist} from './todolist/Todolist';
import {v1} from 'uuid';

export type FiltersType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: v1(), title: 'HTML', isDone: false},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'CSS', isDone: false},
            {id: v1(), title: 'Redux', isDone: true}
        ]
    )

    const changeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    let [filter, setFilter] = useState<FiltersType>('all')

    let tasksForTodolist = tasks;
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }


    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    const changeFilter = (filter: FiltersType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    return (

        <div className={style.app}>
            <Todolist title={'What to learn'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
            />
        </div>

    );
}


export default App;
