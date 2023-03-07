import {
    AddTodolist,
    ChangeTodolistFilter,
    ChangeTodolistTitle,
    RemoveTodolist,
    todolistReducer
} from './todolistReducer'
import {v1} from 'uuid';
import {TodolistType} from '../../App';


test('remove todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    const endState: Array<TodolistType> = todolistReducer(startState, RemoveTodolist(todolistId1))

    expect(endState[0].id).toBe(todolistId2)
    expect(endState.length).toBe(1)

})

test('add new todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    const endState: any = todolistReducer(startState, AddTodolist('What to do'))

    expect(endState[2].title).toBe('What to do')
    expect(endState.length).toBe(3)

})

test('change todolist filter', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    const endState: any = todolistReducer(startState, ChangeTodolistFilter(todolistId1, 'active'))

    expect(endState[0].filter).toBe('active')
    expect(endState[1].filter).toBe('all')
})

test('change todolist title', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    const endState: any = todolistReducer(startState, ChangeTodolistTitle(todolistId1, 'What to learn tomorrow'))

    expect(endState[0].title).toBe('What to learn tomorrow')
    expect(endState[1].title).toBe('What to buy')
})