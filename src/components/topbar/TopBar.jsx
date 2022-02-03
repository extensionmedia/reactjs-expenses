import {React, useState} from 'react';
import { Menu, Bell, Search, X } from 'react-feather';
import SearchBar from './Search/SearchBar'
import Notifications from './Notifications/Notifications';
function TopBar() {
  const [showSearch, setShowSearch] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  
  return (
    <div className='w-full shadow bg-white relative'>
        <div className='container mx-auto flex items-center justify-between bg-white h-12 text-gray-700'>
          <div className="cursor-pointer hover:bg-green-700 hover:text-white rounded-full p-1 transition-all">
              <Menu />
          </div>
          <div className="font-medium"> 
          Expenses
          </div>
          <div className="flex items-center gap-4">
            <div onClick={() => setShowSearch(!showSearch)} className="cursor-pointer hover:bg-green-700 hover:text-white rounded-full p-1 transition-all">
                <Search />
            </div>
            <div className="relative">
                { !showNotifications && <div className="">
                <Bell onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer transition-all p-1 h-8 w-8 hover:bg-green-700 hover:text-white rounded-full" />
                  <div className="px-[4px] ml-4 absolute -top-1  bg-red-500 text-white rounded-full text-xs text-center">1</div>
                </div>}
                { showNotifications && <div onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer hover:text-red-500 p-1 transition-all">
                  <X />
                </div>}
                { showNotifications && <Notifications showNotifications={showNotifications} setShowNotifications={setShowNotifications} />}
            </div>
          </div>
        </div> 
        { showSearch && <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />}
    </div>
  )
}

export default TopBar