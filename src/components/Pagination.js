import React, { useState } from 'react'

function Pagination({pageProp,PreviousPage,NextPage}) {
  
  return (<>
<div className='w-full flex justify-center mb-8'>
    <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl' onClick={PreviousPage}>Previous</button>
    <button className='p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300'>{pageProp}</button>
    <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl' onClick={NextPage}>Next</button>
</div>
  </>)
    
  
}

export default Pagination