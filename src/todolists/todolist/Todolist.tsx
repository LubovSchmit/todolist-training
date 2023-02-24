import React from 'react';
import style from './Todolist.module.scss'
import {FiltersType, TaskType} from '../../App';
import {Tasks} from './tasks/Tasks';


type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FiltersType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FiltersType
}


export const Todolist = (props: PropsType) => {


    return (
        <div className={style.todolistContainer}>

            <h3>{props.title}</h3>

            <Tasks tasks={props.tasks}
                   addTask={props.addTask}
                   filter={props.filter}
                   title={props.title}
                   changeFilter={props.changeFilter}
                   removeTask={props.removeTask}
                   changeTaskStatus={props.changeTaskStatus}
            />

        </div>
    );
};

