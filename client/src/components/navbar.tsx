import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='px-10 py-5 z-10 absolute top-0 w-full flex flex-row align-middle justify-between'>
      <div className='text-lg text-gray-900 font-semibold'>
        <Link to="/">
          <span className='px-6 cursor-pointer'>Logxtr</span>
        </Link>
      </div>
      <div className='text-gray-700 hover:text-gray-900 transition duration-150'>
        <Link to='/dashboard'>
          <button className='px-10 p-2 text-gray-700  transition duration-150 ease-in-out' type='button'>
            Dashboard
          </button>
        </Link>
        <Link to='/signup'>
          <button className='px-10 p-2 text-blue-700 rounded-full border border-blue-500 hover:border-blue-600 hover:text-white hover:bg-blue-500 transition duration-150 ease-in-out mx-4' type='button'>
            Signup
          </button>
        </Link>
        <Link to='/login'>
          <button className='px-10 p-2 bg-blue-500 text-white rounded-full border-0 hover:bg-blue-600' type='button'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}
