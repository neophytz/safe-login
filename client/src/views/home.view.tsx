import React, { memo } from 'react'

const Home = () => {
    return (
        <section className='overflow-hidden'>
            <div className='absolute top-[-35vh] overflow-hidden left-[-28vw] bg-yellow-500 -rotate-[40deg] h-[100vh] w-[100vw]'></div>
            <div className='grid grid-cols-2'>
                <div className='p-10 h-[50vh] w-100 bg-white card'></div>
                <div className='p-10 h-[50vh] w-100 bg-white image'></div>
            </div>
        </section>
    )
}

export default memo(Home);