import React from 'react';
import style from './Todolist.module.scss'

export type TaskType={
    id: string,
    title: string,
    isDone: boolean
}


type PropsType = {
    title: string,
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {


    return (
        <div className={style.todolist}>

            <h3>{props.title}</h3>
            <input type="text"/>
            <button>+</button>
            <ul>
                <li>
                    <input type="checkbox" checked={props.tasks[0].isDone}/>
                    <span>{props.tasks[0].title}</span>
                </li>


            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}