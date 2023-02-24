import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './AddItemInputForm.module.scss'


type PropsType = {

    addItem: (title: string) => void
}


export const AddItemInputForm = (props: PropsType) => {

    let [error, setError] = useState<string | null>(null)
    let [newItemTitle, setNewItemTitle] = useState<string>('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItemTitle(e.currentTarget.value)
    }
    const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);

        if (e.charCode === 13) {
            props.addItem(newItemTitle)
            setNewItemTitle('')
        }
    }
    const addItemTitleHandler = () => {
        if (newItemTitle.trim() === '') {
            return setError('Title is required')
        }

        props.addItem(newItemTitle.trim())
        setNewItemTitle('')
    }

    return (
        <div className={style.addItemInputFormContainer}>
            <input className={error ? style.error : ''}
                   type="text"
                   value={newItemTitle}
                   onChange={onNewTitleChangeHandler}
                   onKeyPress={onKeyPressInputHandler}
            />

            <button onClick={addItemTitleHandler}>+</button>

            {error && <div className={style.errorMsg}>{error}</div>}


        </div>
    );
};

