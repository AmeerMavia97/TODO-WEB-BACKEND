import axios from 'axios';
import React, { useRef, useState } from 'react'

const Card = ({title , DeleteTodo , EditTodo , index , id}) => {

    const [Edit , setEdit] = useState(true)

    const Editval = useRef()


    function succesFullyEdit(){
        const Editvalue = Editval.current.value
        if(Editvalue.length > 0){
            EditTodo(Editvalue , index , id)
            setEdit(true)
        }else{
            console.log('value dal bhai');
        }
       
    }


   
    


    return (
        <>
           <div className='bg-gray-100 pt-3'>
            {Edit ? <div className=' bg-gray-100 '>
                <div className='ml-[30%] p-1 mr-[30%] rounded mt-6 flex justify-between'>
                    <p className='text-xl font-bold text-[#585858]' >{title}</p>
                    <div className=''>
                        <button  onClick={DeleteTodo} className='text-white  mr-6'><i className=" text-[#7e7d7d] fa-solid fa-trash"></i></button>
                        <button onClick={()=>{setEdit(false)}} className='text-white mr-3'><i className="text-[#7e7d7d] mr-3 fa-solid fa-pen-to-square"></i></button>
                    </div>
                </div>            
                <span  ><hr className='  ml-[27%] w-[43%] '  /><hr className='  ml-[27%] w-[43%] '  /> <hr className='  ml-[27%] w-[43%] '  /> <hr className='  ml-[27%] w-[43%] '  /></span>
            </div>:
            <div>
            <div className='ml-[30%] p-1 mr-[30%] rounded mt-9 flex justify-between'>
            
                <input type="text" className='rounded-md mb-1 w-[300px] hover:border-[#585858] hover:border-solid hover:border-[1px]' ref={Editval} placeholder='ENTER EDIT VALUE' />
                <button onClick={()=>{succesFullyEdit()}} className='mr-12  text-2xl' type='submit' ><i className="text-[#7e7d7d] fa-solid fa-check"></i></button>
                </div>
                <span  ><hr className='  ml-[27%] w-[43%] '  /><hr className='  ml-[27%] w-[43%] '  /> <hr className='  ml-[27%] w-[43%] '  /> <hr className='  ml-[27%] w-[43%] '  /></span>
                    
                </div>}
            
           </div>
            
        </>


    )
}

export default Card