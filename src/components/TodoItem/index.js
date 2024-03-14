import './index.css'

const TodoItem = props => {
  const {val, dlt} = props
  const {id, title} = val

  const butDlt = () => {
    dlt(id)
  }

  return (
    <li className="bg">
      <p className="para">{title}</p>
      <button type="button" className="but" onClick={butDlt}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
