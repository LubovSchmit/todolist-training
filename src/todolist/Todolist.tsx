import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolist.module.scss'
import {FiltersType} from '../App';

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}


type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FiltersType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }
    const onAllClickHandler = () => props.changeFilter('all')
    const onActiveClickHandler = () => props.changeFilter('active')
    const onCompletedClickHandler = () => props.changeFilter('completed')


    return (
        <div className={style.todolist}>

            <h3>{props.title}</h3>

            <input type="text"
                   value={newTaskTitle}
                   onChange={onNewTitleChangeHandler}
                   onKeyPress={onKeyPressInputHandler}
            />

            <button onClick={addTask}>+</button>

            <ul>
                {
                    props.tasks.map(t => {

                            const onRemoveClickHandler = () => props.removeTask(t.id)


                            return <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={onRemoveClickHandler}>x</button>
                            </li>
                        }
                    )
                }


            </ul>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    )
}