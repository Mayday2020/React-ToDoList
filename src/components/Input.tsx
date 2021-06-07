import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type InputType = {
    callBack:(newTitle: string)=>void
}
const Input = (props:InputType) => {
    let [title, setTitle]=useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.callBack(title)
        setTitle('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter'){
            onClickHandler()
        }
    }
    return (
        <div>
            <input
                onChange={onChangeHandler}
                value={title}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}
export default Input