import { TodoItem } from "./TodoItem"

export function TodoList({todos, ToggleTodo, deleteTodo}){
    return (
    <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo =>{
      return (
        <TodoItem 
        {...todo} //includes here id={todo.id} completed={todo.completed} title={todo.title}
        key={todo.id} 
        ToggleTodo={ToggleTodo} 
        deleteTodo={deleteTodo} />
      )
    })}
  </ul>
    )
}