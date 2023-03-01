import React from 'react';
import style from './Todolists.module.scss'
import {FiltersType, TaskType} from '../App';
import {Todolist} from './todolist/Todolist';
import {AddItemInputForm} from '../commun/addItemInputForm/AddItemInputForm';


type PropsType = {
    title: string
    id: string
    filter: FiltersType

    removeTodolist: (todolistId: string) => void
    changeTodolistFilter: (filter: FiltersType, todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newValue: string) => void

    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    addTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, id: string, newTitle: string) => void
}

export function Todolists(props: PropsType) {



    return (

        <div className={style.todolistsContainer}>


            <Todolist id={props.id}
                      title={props.title}
                      filter={props.filter}

                      removeTodolist={props.removeTodolist}
                      changeTodolistFilter={props.changeTodolistFilter}
                      changeTodolistTitle={props.changeTodolistTitle}

                      tasks={props.tasks}
                      removeTask={props.removeTask}
                      addTask={props.addTask}
                      changeTaskStatus={props.changeTaskStatus}
                      changeTaskTitle={props.changeTaskTitle}
            />
        </div>


    )
}