import React from 'react'
import { logout } from '../../services/auth.service';

const Dashboard = () => {
  return (
    <div className='bg-gray-50 pt-[60px] h-screen w-full text-center'>
      <section className='bg-white p-10 m-10 font-semibold rounded-lg text-2xl'>
        Dashboard
      </section>
      <button type='button' onClick={logout} className="p-2 px-5 bg-red-500 hover:bg-red-600 transition duration-150 text-white rounded">Logout</button>
    </div>
  )
}

export default Dashboard;