import {FiltersType, TodolistType} from '../../App';
import {v1} from 'uuid';

type StateType = Array<TodolistType>

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    title: string
}
type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string,
    filter: FiltersType
}
type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string,
    title: string
}
type ActionsType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistFilterActionType
    | ChangeTodolistTitleActionType


export const todolistReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {

        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.id)

        }
        case 'ADD-TODOLIST': {
            let newTodolist: TodolistType = {id: v1(), title: action.title, filter: 'all'}
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            let todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            let todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]
        }

        default:
            throw new Error('Error in action type')
    }

}

export const RemoveTodolist = (id: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id}
}
export const AddTodolist = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title}
}
export const ChangeTodolistTitle = (id: string, newTitle: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id, title: newTitle}
}
export const ChangeTodolistFilter = (id: string, filter: FiltersType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id, filter}
}