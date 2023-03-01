import React, {ChangeEvent} from 'react';
import style from './Tasks.module.scss'
import {AddItemInputForm} from '../../../commun/addItemInputForm/AddItemInputForm';
import {FiltersType, TaskType} from '../../../App';
import {Task} from './task/Task';


type PropsType = {
    id: string
    title: string
    filter: FiltersType

    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    addTask: (todolistId: string, newTaskTitle: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, taskId: string, newTaskTitle: string) => void
}

export const Tasks = (props: PropsType) => {

    const addTask = (newTaskTitle: string) => {
        props.addTask(props.id, newTaskTitle)
    }

    return (
        <div className={style.tasksContainer}>

            <AddItemInputForm addItem={addTask}/>

            <ul>
                {
                    props.tasks.map(t => {

                            const onRemoveClickHandler = () => props.removeTask(props.id, t.id)
                            const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(props.id, t.id, e.currentTarget.checked)
                            }

                            return <Task key={t.id}
                                         id={props.id}
                                         task={t}
                                         onRemoveClickHandler={onRemoveClickHandler}
                                         onChangeCheckboxHandler={onChangeCheckboxHandler}
                                         changeTaskTitle={props.changeTaskTitle}/>
                        }
                    )
                }
            </ul>


        </div>
    );
};

