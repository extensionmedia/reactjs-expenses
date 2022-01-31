import React from 'react';
import { Menu, User } from 'react-feather';

function TopBar() {
  return (
    <div className='w-full shadow bg-white'>
        <div className='container mx-auto flex items-center justify-between bg-white h-12 text-gray-700'>
                <div className="cursor-pointer hover:bg-green-700 hover:text-white rounded-full p-1 transition-all">
                    <Menu />
                </div>
                <div className="font-medium"> 
                Expenses
                </div>
                <div className="cursor-pointer hover:bg-green-700 hover:text-white rounded-full p-1 transition-all">
                    <User />
                </div>
        </div>
    </div>
  )
}

export default TopBar