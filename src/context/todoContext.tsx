import React, { createContext, useState } from "react";

interface ITodoContext {
    status: boolean
    selectTodo: () => void
}

export const TodoContext =  createContext<ITodoContext>( {
    status: false, 
    selectTodo: () => {},
})

export const TodoState = ({children} : {children: React.ReactNode}) => {

    const [status, setStatus] = useState(false)

    const selectTodo = () => setStatus(prev => !prev)

    return (
        <TodoContext.Provider value={{status, selectTodo}}>
            { children }
        </TodoContext.Provider>
    )
}