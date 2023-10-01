
import React from 'react'
import Chart from "./Chart"

const DashBoard = () => {
  return (
    <div className='flex flex-col space-y-8 py-12 px-10'>
        <h2 className='text-3xl font-bold'>Dashboard</h2>

        <div className='flex space-x-4'>
           <div className='flex flex-col justify-center  border border-gray-500 w-2/5 h-[150px] rounded p-4 mt-5 shadow-sm  hover:shadow-md '>
           <span className='text-2xl'>Henry Nnamani</span>
            <p>Your balance is: $2000</p>
        </div>
        <div className='flex flex-col justify-center  border border-gray-500 w-2/5 h-[150px] rounded p-4 mt-5 shadow-sm  hover:shadow-md'>
            <span className='text-2xl'>Henry Nnamani</span>
            <span>Your balance is: $2000</span>
        </div>
        </div>

        <div className='flex space-x-4 mt-3 w-4/5 flex-col'>
           <h2 className='text-3xl font-bold'>Expenses Chart</h2>
            <Chart />
        </div>


        <div className='flex space-x-4'>
           <div className='flex flex-col justify-center  border border-gray-500 w-2/5 h-[150px] rounded p-4 mt-5 shadow-sm  hover:shadow-md '>
           <span className='text-2xl'>Your activity</span>
            <li className='mt-4'>You sent $500 to your mother</li>
        </div>
        <div className='flex flex-col justify-center  border border-gray-500 w-2/5 h-[150px] rounded p-4 mt-5 shadow-sm hover:shadow-md'>
            <span className='text-2xl'>Pending bills</span>
            <span className='mt-4'>Broadband Bill: $500</span>
        </div>
        
        </div>

        
    </div>
  )
}

export default DashBoard