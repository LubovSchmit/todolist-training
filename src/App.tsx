import React, {useState} from 'react';
import style from './App.module.scss';
import {TaskType, Todolist} from './todolist/Todolist';
import {v1} from 'uuid';


function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: v1(), title: 'HTML', isDone: false},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'CSS', isDone: false},
            {id: v1(), title: 'Redux', isDone: true}
        ]
    )


    return (

        <div className={style.app}>
            <Todolist title={'What to learn'}
                      tasks={tasks}
            />
        </div>

    );
}


export default App;
