import ListItem from "./ListItem"

// eslint-disable-next-line react/prop-types
const TodoList = ({todos, removeTodo}) => {
  return (
    <div className="mx-auto py-0 flex items-center flex-col font-bold">
     {
      // eslint-disable-next-line react/prop-types
      todos.map((todo, idx) => {
        return (
          <ListItem text={todo} key={idx} removeTodo={() => removeTodo(idx)} />
        )
      })
     }
    </div>
  )
}

export default TodoList