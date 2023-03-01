import React, {ChangeEvent, useState} from 'react';
import style from './EditableSpan.module.scss';


type PropsType = {
    title: string
    onChange: (newValue: string) => void
}

export const EditableSpan = (props: PropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState<string>('')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    };
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    };
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editMode
        ? <input value={title}
                 onBlur={activateViewMode}
                 autoFocus
                 onChange={onChangeTitleHandler}

        />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>


};

