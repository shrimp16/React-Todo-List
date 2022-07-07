export default function List (todos) {

    return (
        <>
            {todos.todos.map((todo) => {
                return (
                    <p>{todo}</p>
                )
            })}
        </>
    )
}