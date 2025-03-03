export function TodoItem({completed, id, title, ToggleTodo, deleteTodo}) {
    return <li>
    <label>
      <input 
        type="checkbox" 
        checked={completed}
        onChange={e => ToggleTodo(id, e.target.checked)}
      />
        {title}
    </label>
    <button 
      onClick={() => deleteTodo(id)}
      className="btn btn-danger">Delete</button>
  </li>
}