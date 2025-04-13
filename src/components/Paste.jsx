import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Home from './Home';

const Paste = () => {

  const [searchTerm , setSearchTerm]=useState('');


  const pastes=useSelector((state)=>state.paste.pastes); 
  // console.log(pastes);
  const dispatch=useDispatch();


  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  
  return (
    <div className='flex flex-col justify-center p-7 gap-5'>
      <input
      className='p-3 bg-gray-100  rounded-2xl shadow-sm focus:outline-none focus:ring-0  min-w-[50%]'
      type="search"
      placeholder='Search Here'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)} />

      
      <div className='flex flex-col gap-5 bg-gray-100 rounded-2xl shadow-sm min-w-[50%] p-5'>
        {
          filterData.length>0 ? 
          filterData.map(
            (paste)=>{
              return (
                <div className='bg-gray-200 p-2 rounded-2xl'>
                  <div className='text-2xl font-bold'>
                   {paste.title}
                  </div>
                  <div >
                    {paste.content}
                  </div>
                </div>
              )
            }
          ) : 
          // No paste - agar paste hi exsist nahi kartha tho 
          <div className='flex  flex-col justify-center items-center '>
                No Paste Exsist , Create One ! 
                <NavLink to="/">
                    <button className='bg-blue-600 rounded-2xl mt-4 text-white text-xs p-2'>
                      Create One
                    </button>
                </NavLink>
          </div>
        }

      </div>


    </div>
  )
}

export default Paste