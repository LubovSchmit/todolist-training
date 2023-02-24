import React, {ChangeEvent} from 'react';
import style from './Task.module.scss'
import {TaskType} from '../../../../App';



type PropsType = {
    task: TaskType
    onChangeCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onRemoveClickHandler: () => void

}

export const Task = (props: PropsType) => {



    return (
        <div className={style.taskContainer}>

            <li className={props.task.isDone ? style.isDone : ''}
                key={props.task.id}>

                <input type="checkbox"
                       checked={props.task.isDone}
                       onChange={props.onChangeCheckboxHandler}/>

                <span>{props.task.title}</span>
                <button onClick={props.onRemoveClickHandler}>x</button>
            </li>

        </div>
    );
};

