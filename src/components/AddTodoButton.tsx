interface AddTodoButtonProps {
    onOpen: () => void
}

export function AddTodoButton({onOpen} : AddTodoButtonProps) {
    return(
        <div className="fixed bottom-0 right-0 m-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full text-lg" onClick={onOpen}>
                Add
            </button>
        </div>
    )
}