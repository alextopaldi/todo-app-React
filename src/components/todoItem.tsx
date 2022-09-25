import { Button, Checkbox } from "@material-tailwind/react"
import { useContext, useEffect, useState } from "react"
import { ITodoItem } from "../models/todoItem"
import { CSSTransition } from 'react-transition-group';
import  '../App.css'

interface TodoItemProps {
    todoItem: ITodoItem
    onX : (id : number) => void
    onToggle : (id: number) => void
}

export function TodoItem({todoItem, onX, onToggle} : TodoItemProps) {

    const [description, setDescription] = useState(false)
    const [checkbox, setCheckbox] = useState(false)

    function onClickFlagHandler() {
        if (todoItem.description == '') {
            return
        }
        setDescription(prev => !prev)
    }

    function onClickXHandler() {
        onX(todoItem.id)
    }

    function onClickToggle() {
        onToggle(todoItem.id)
        setCheckbox(prev => !prev)
    }

    useEffect(() => {
        if (todoItem.completed == true) {
            setCheckbox(true)
        }
      }, [])

    const value = description? 'Hide' : 'More'
    const todoClass = checkbox? 'opacity-60' : 'opacity-100'
    const nameClass = checkbox? ' line-through' : ''
    const todoClasses = ['border py-2 px-4 mt-5 shadow-md', todoClass]
    const nameClasses = [nameClass]

    return (
        <div className="my-node">
        <div className={todoClasses.join(' ')}>
            <div className="flex flex-wrap justify-between items-center ">
            <div className="flex flex-wrap items-center">
            <Checkbox color="green" onClick={ onClickToggle} checked={checkbox} readOnly/>
            <p className={nameClasses.join(' ')}>{todoItem.name}</p>
            </div>
            <div className="flex flex-wrap items-center">
                <Button onClick={onClickFlagHandler} size="sm" variant="text" >{value}</Button>
                <Button onClick={onClickXHandler} size="sm" variant="text" color="red">X</Button>
            </div>
            </div>
            {description && <p className=" my-5">Description: {todoItem.description}</p>}
        </div>
        </div>
    )
}