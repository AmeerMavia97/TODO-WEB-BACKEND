import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import axios from 'axios'
import Card from './components/List'

const App = () => {

  const todo = useRef()
  const [ALLTodo , setAllTodo] = useState([])

  function Addtodo(e){
    e.preventDefault();
    const Todo = todo.current.value
    axios.post('https://calm-gray-shrimp-wig.cyclic.app/app/v1/todo' , {
      title: Todo
    })
    .then((res)=>{
      console.log(res);
      setAllTodo([...ALLTodo ,{
        title: Todo
      }])
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  useEffect(()=>{

    axios.get('https://calm-gray-shrimp-wig.cyclic.app/app/v1/todo')
    .then((res)=>{
      console.log(res.data);
      setAllTodo(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })

  }, [])


  function DeleteTodo(id , index){
    console.log('hello' + id);
    axios.delete(`https://calm-gray-shrimp-wig.cyclic.app/app/v1/todo${id}`)
    .then((res)=>{
      console.log(res);
      ALLTodo.splice(index , 1)
      setAllTodo([...ALLTodo])
    })
    .catch((err)=>{
      console.log(err);

    })
  }

  function EditTodo(value , index , id){
    console.log('hello'+ value);
    axios.put(`https://calm-gray-shrimp-wig.cyclic.app/app/v1/todo${id}` , {
      title: value
    })
    ALLTodo[index].title = value
    setAllTodo([...ALLTodo])

  }




  return (
    <>
    <Navbar></Navbar>
    <div className='bg-gray-100 '>
        <form onSubmit={Addtodo} className='text-center'>
          <input type="text" className='text-white bg-gray-300 px-3 mt-[80px]  w-[39%] rounded-md mr-10 h-10  ' ref={todo} placeholder='ENTER YOUR TODO' /> <br />
          <button type='submit' className='px-[250px] pb-[6px] mr-10 pt-[8px] mt-3 bg-[#5f6c76] rounded-md text-white font-poppins '>Add</button>
        </form>
      </div>

      {ALLTodo.length > 0 ? ALLTodo.map((item, index) => {
        return (
          <Card id={item.id} index={index} title={item.title} key={index} DeleteTodo={()=>DeleteTodo(item.id , index)} EditTodo={EditTodo}/>
        )
      }) : <span className=' text-2xl font-poppins bg-gray-100 p-4 pb-5 pt-8 flex justify-center'> DATA NOT FOUND...</span>}
    <Fotter></Fotter>
    </>

  )
}

export default App