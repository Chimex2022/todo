import { useState } from "react"

 // eslint-disable-next-line react/prop-types
 const Form = ({addTodo}) => {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText("")
  }


  return (
    <>
    <h1 className="text-pink-600 font-bold text-center pt-6 text-2xl">Welcome to Tcodess Todo App</h1>
    <form className="flex justify-center h-[250px] items-center py-0" onSubmit={handleSubmit}>
      <input type="text" placeholder ="Add an item..." style={{color:"blue",  fontWeight: "bold"}} className="border border-black outline-none px-2 h-8 w-[400px] rounded-md mr-4"
      onChange={(e) =>setText(e.target.value)} value={text} />
      <button className="bg-cyan-500 text-white font-bold flex items-center rounded-md h-8 px-3 py-3">Add</button>
      </form>
      </>
  )
}

export default Form

