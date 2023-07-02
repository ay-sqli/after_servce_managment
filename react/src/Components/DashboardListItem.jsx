import React from 'react'
import {FaArrowRight } from 'react-icons/fa';


function DashboardListItem(claim) {
  return (
    
<>

        <div className='flex flex-col py-4 px-8 shadow-md rounded-lg bg-gradient-to-br from-blue-500 ... hover:bg-slate-500'>
            <div className='flex justify-between items-center'>
                <ul className="flex flex-col gap-4 text-white">
                    <li className='text-lg font-bold'><span className='font-light'>{claim.id}</span></li>
                    <li className='text-lg font-bold'><span className='font-light'>{claim.id}</span></li>
                </ul>
            </div>
            </div>
             <div className='absolute bottom-5 right-7'>
                 <FaArrowRight color='black' className=' text-2xl hover:opacity-60' />
            </div>
            
           
        

</>
  )
}

export default DashboardListItem