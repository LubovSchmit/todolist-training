import React, {ChangeEvent} from 'react';
import style from './Task.module.scss'
import {TaskType} from '../../../../App';
import {EditableSpan} from '../../../../commun/editableSpan/EditableSpan';


type PropsType = {
    id: string
    task: TaskType
    onChangeCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onRemoveClickHandler: () => void
    changeTaskTitle: (todolistId: string, taskId: string, newTitle: string) => void
}

export const Task = (props: PropsType) => {

    const onChangeTaskTitle = (newValue: string) => {
        props.changeTaskTitle(props.id, props.task.id, newValue)
    }

    return (
        <div className={style.taskContainer}>

            <li className={props.task.isDone ? style.isDone : ''}
                key={props.task.id}>

                <input type="checkbox"
                       checked={props.task.isDone}
                       onChange={props.onChangeCheckboxHandler}/>

                <EditableSpan title={props.task.title} onChange={onChangeTaskTitle}/>
                <button onClick={props.onRemoveClickHandler}>x</button>
            </li>

        </div>
    );
};

