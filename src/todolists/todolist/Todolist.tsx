import React from 'react';
import style from './Todolist.module.scss'
import {FiltersType, TaskType} from '../../App';
import {Tasks} from './tasks/Tasks';
import {EditableSpan} from '../../commun/editableSpan/EditableSpan';


type PropsType = {
    id: string
    title: string
    filter: FiltersType

    removeTodolist: (todolistId: string) => void
    changeTodolistFilter: (filter: FiltersType, todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTodolistTitle: string) => void

    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    addTask: (todolistId: string, newTaskTitle: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, taskId: string, newTaskTitle: string) => void
}


export const Todolist = (props: PropsType) => {

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }
    const onChangeTodolistTitle = (newTodolistTitle: string) => {
        props.changeTodolistTitle(props.id, newTodolistTitle)
    }

    const onAllClickHandler = () => props.changeTodolistFilter('all', props.id)
    const onActiveClickHandler = () => props.changeTodolistFilter('active', props.id)
    const onCompletedClickHandler = () => props.changeTodolistFilter('completed', props.id)

    return (
        <div className={style.todolistContainer}>

            <div className={style.titleTodolistContainer}>
                <EditableSpan title={props.title}
                              onChange={onChangeTodolistTitle}/>
                <button onClick={removeTodolistHandler}>x</button>
            </div>


            <Tasks id={props.id}
                   title={props.title}
                   filter={props.filter}

                   tasks={props.tasks}
                   removeTask={props.removeTask}
                   addTask={props.addTask}
                   changeTaskStatus={props.changeTaskStatus}
                   changeTaskTitle={props.changeTaskTitle}
            />

            <div className={style.filterButtonsContainer}>
                <button className={props.filter === 'all' ? style.activeFilter : ''}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? style.activeFilter : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? style.activeFilter : ''}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>

        </div>
    );
};

