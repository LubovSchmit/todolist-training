import React, {ChangeEvent} from 'react';
import style from './Tasks.module.scss'
import {AddItemInputForm} from '../../../commun/addItemInputForm/AddItemInputForm';
import {FiltersType, TaskType} from '../../../App';
import {Task} from './task/Task';


type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FiltersType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FiltersType
}

export const Tasks = (props: PropsType) => {

    const onAllClickHandler = () => props.changeFilter('all')
    const onActiveClickHandler = () => props.changeFilter('active')
    const onCompletedClickHandler = () => props.changeFilter('completed')


    return (
        <div className={style.tasksContainer}>


            <AddItemInputForm addItem={props.addTask}/>

            <ul>
                {
                    props.tasks.map(t => {

                            const onRemoveClickHandler = () => props.removeTask(t.id)
                            const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(t.id, e.currentTarget.checked)
                            }

                            return <Task onRemoveClickHandler={onRemoveClickHandler}
                                         onChangeCheckboxHandler={onChangeCheckboxHandler}
                                         task={t}/>
                        }
                    )
                }
            </ul>

            <div>
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

