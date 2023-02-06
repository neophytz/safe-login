import React, { memo } from 'react'

const Login = () => {
    return (
        <section className='absolute top-0 left-0 pt-[60px] h-screen w-screen'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 bg-blue-500 h-[95vh] w-full border rounded-r-3xl'></div>
                <div className='col-span-1 flex items-center w-full'>
                    <div className='p-5 rounded-3xl border border-gray-100 shadow-2xl bg-white z-5 h-[560px] w-[480px] -translate-x-1/2'>
                        <h1 className='text-3xl font-semibold text-blue-600'>
                            Login
                        </h1>
                        <p className='text-md text-gray-500'>We provide 100% safety and security to out customer.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Login);