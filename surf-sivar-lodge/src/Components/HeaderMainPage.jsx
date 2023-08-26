import React from 'react'

const HeaderMainPage = () => {
  return (
    <>
    <nav className='bg-black'>
        <div className="flex justify-between items-center px-4 py-1">
            <p className="text-white font-bold flex-row">
                Land of waves and volcanos, Welcome to el Salvador!
            </p>
            <div className='flex text-white space-x-4'>
                <p>Contact our Travel Experts Team for more information!</p>
                <p>+503 9876 5432</p>
                <p>info@surfsivarlodge</p>
                <p className='uppercase'>Language</p>
                <p className='uppercase'>sing in</p>
            </div>
        </div>
    </nav>
    </>
  )
}

export default HeaderMainPage
