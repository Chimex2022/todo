
// eslint-disable-next-line react/prop-types
const ListItem = ({text, removeTodo}) => {
  return (
    <div className="bg-red-600 px-3 py-3 flex flex-row items-center my-5 mx-auto w-1/2 justify-center
    rounded-md shadow-lg hover:bg-transparent text-black border-2 border-red-700 cursor-pointer">
    <p>{text}</p>
    <button className="rounded-full ml-4 h-4 w-4 border-2 border-blue-700" onClick={removeTodo}></button>
    </div>
  )
}

export default ListItem