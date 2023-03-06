import React, {useState} from 'react';
import style from './App.module.scss';
import {Todolists} from './todolists/Todolists';
import {v1} from 'uuid';
import {AddItemInputForm} from './commun/addItemInputForm/AddItemInputForm';

export type FiltersType = 'all' | 'active' | 'completed'
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type TodolistType = {
    id: string,
    title: string,
    filter: FiltersType
}
export type TasksObjType = {
    [id: string]: TaskType[]
}

const todolistId1 = v1()
const todolistId2 = v1()


function App() {

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'To learn', filter: 'all'},
        {id: todolistId2, title: 'To buy', filter: 'all'}
    ])

    const removeTodolist = (todolistId: string) => {
        todolists = todolists.filter(tl => tl.id !== todolistId)
        setTodolists([...todolists])
        delete tasksObj[todolistId]
        setTasksObj({...tasksObj})
    }
    const addTodolist = (newTodolistTitle: string) => {
        let todolist: TodolistType = {id: v1(), title: newTodolistTitle, filter: 'all'};
        setTodolists([todolist, ...todolists])
        setTasksObj({...tasksObj, [todolist.id]: []})
    }
    const changeTodolistFilter = (filter: FiltersType, todolistId: string) => {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = filter;
            setTodolists([...todolists])
        }
    }
    const changeTodolistTitle = (todolistId: string, newTodolistTitle: string) => {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.title = newTodolistTitle
            setTodolists([...todolists])
        }
    }


    let [tasksObj, setTasksObj] = useState<TasksObjType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML', isDone: false},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'CSS', isDone: false},
            {id: v1(), title: 'Redux', isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: 'milk', isDone: false},
            {id: v1(), title: 'bread', isDone: true},
            {id: v1(), title: 'book', isDone: false},

        ]
    })

    const removeTask = (todolistId: string, taskId: string) => {
        tasksObj[todolistId] = tasksObj[todolistId].filter(t => t.id !== taskId);
        setTasksObj({...tasksObj})
    }
    const addTask = (todolistId: string, title: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        tasksObj[todolistId] = [newTask, ...tasksObj[todolistId]];
        setTasksObj({...tasksObj})
    }
    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        let task = tasksObj[todolistId].find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
            setTasksObj({...tasksObj})
        }
    }
    const changeTaskTitle = (todolistId: string, taskId: string, newTitle: string) => {
        let task = tasksObj[todolistId].find(t => t.id === taskId)
        if (task) {
            task.title = newTitle
            setTasksObj({...tasksObj})
        }
    }


    return (
        <div className={style.app}>

            <AddItemInputForm addItem={addTodolist}/>

            {
                todolists.map(tl => {

                    let tasksForTodolist = tasksObj[tl.id];
                    if (tl.filter === 'active') {
                        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                    }
                    if (tl.filter === 'completed') {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                    }

                    return <Todolists key={tl.id}
                                      id={tl.id}
                                      title={tl.title}
                                      filter={tl.filter}

                                      removeTodolist={removeTodolist}
                                      changeTodolistFilter={changeTodolistFilter}
                                      changeTodolistTitle={changeTodolistTitle}

                                      tasks={tasksForTodolist}
                                      removeTask={removeTask}
                                      addTask={addTask}
                                      changeTaskStatus={changeTaskStatus}
                                      changeTaskTitle={changeTaskTitle}
                    />
                })
            }
        </div>
    );
}


export default App;
