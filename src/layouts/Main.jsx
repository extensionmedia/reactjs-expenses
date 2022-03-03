import React from 'react'
import Menu from './Menu'
import Topbar from './topbar/TopBar'

const Main = () => {
  return (
    <main className='h-screen w-screen bg-gray-50 flex'>
      <div className="w-64 bg-red-200">
        <Menu />
      </div>
      <div className="flex-1 bg-gray-50">
        <Topbar />
        <div className="">
           content here
        </div>
      </div>
    </main>
  )
}

export default Main