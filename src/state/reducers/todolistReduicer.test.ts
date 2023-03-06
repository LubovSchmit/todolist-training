import {todolistReducer} from './todolistReducer'
import {v1} from 'uuid';
import {FiltersType} from '../../App';


export type TodolistType = {
    id: string,
    title: string,
    filter: FiltersType
}


test('remove todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    const endState: any = todolistReducer(startState, {type: 'REMOVE-TODOLIST', id: todolistId1})

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

    const endState: any = todolistReducer(startState, {type: 'ADD-TODOLIST', title: 'What to do'})

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

    const endState: any = todolistReducer(startState, {
        type: 'CHANGE-TODOLIST-FILTER',
        id: todolistId1,
        filter: 'active'
    })

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

    const endState: any = todolistReducer(startState, {
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistId1,
        title: 'What to learn tomorrow'
    })

    expect(endState[0].title).toBe('What to learn tomorrow')
    expect(endState[1].title).toBe('What to buy')
})