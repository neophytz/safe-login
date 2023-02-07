import React, { memo } from 'react'

const Signup = () => {
    return (
        <section className='absolute top-0 left-0 z-1 pt-[100px] md:pt-[75px] h-[90vh] w-screen'>
            <div className='grid md:grid-cols-3'>
                <div className='col-span-1 flex justify-center md:justify-start items-center w-full'>
                    <div className='p-5 px-10 rounded-3xl border border-gray-100 shadow-2xl bg-white z-5 h-[610px] w-[520px] md:translate-x-1/2'>
                        <h1 className='text-3xl font-semibold text-teal-600'>
                            Signup
                        </h1>
                        <p className='text-md text-gray-500'>Over <span className='font-semibold'>2 Million</span> customer trust our services, join the clan.</p>
                        <form className='p-5 my-3 bg-gray-50 rounded-xl'>
                            <div className='grid gap-2 mb-4 grid-cols-2'>
                                <div className=''>
                                    <label className='text-sm text-gray-700 mb-2'>First name <span className='text-red-500'>*</span></label>
                                    <input type="text" placeholder='John' name='firstName' className='border boder-gray-200 rounded-lg p-3 block w-full' />
                                </div>
                                <div className=''>
                                    <label className='text-sm text-gray-700 mb-2'>Last name</label>
                                    <input type="text" placeholder='Doe' name='lastName' className='border boder-gray-200 rounded-lg p-3 block w-full' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='text-sm text-gray-700 mb-2'>Username <span className='text-red-500'>*</span></label>
                                <input type="text" placeholder='Username' name='username' className='border boder-gray-200 rounded-lg p-3 block w-full' />
                            </div>
                            <div className='mb-4'>
                                <label className='text-sm text-gray-700 mb-2'>Password <span className='text-red-500'>*</span></label>
                                <input type="password" placeholder='*****' name='password' className='border boder-gray-200 rounded-lg p-3 block w-full' />
                            </div>
                            <div className='mb-4'>
                                <label className='text-sm text-gray-700 mb-2'>Confirm password <span className='text-red-500'>*</span></label>
                                <input type="password" placeholder='*****' name='password' className='border boder-gray-200 rounded-lg p-3 block w-full' />
                            </div>
                            <button className='w-full text-lg rounded-xl bg-teal-500 p-3 hover:bg-teal-600 transition duration-150 ease-in mt-4 text-white border-0' type='submit'>
                                Create your account
                            </button>
                        </form>
                    </div>
                </div>
                <div className='col-span-2 hidden md:block bg-teal-500 h-[95vh] w-full border rounded-l-3xl'></div>
            </div>
        </section>
    )
}

export default memo(Signup);