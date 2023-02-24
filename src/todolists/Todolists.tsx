import React from 'react';
import style from './Todolists.module.scss'
import {FiltersType, TaskType} from '../App';
import {Todolist} from './todolist/Todolist';


type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FiltersType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FiltersType
}

export function Todolists(props: PropsType) {


    return (
        <div className={style.todolistsContainer}>
            <Todolist title={props.title}
                      tasks={props.tasks}
                      removeTask={props.removeTask}
                      changeFilter={props.changeFilter}
                      addTask={props.addTask}
                      changeTaskStatus={props.changeTaskStatus}
                      filter={props.filter}

            />
        </div>


    )
}