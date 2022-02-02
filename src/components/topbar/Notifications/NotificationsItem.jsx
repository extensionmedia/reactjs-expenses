import React from 'react';
import { X } from 'react-feather';
const NotificationsItem = () => {
  return (
    <li className='flex justify-between items-center py-2 px-2 text-xs hover:bg-gray-700 cursor-pointer border-b border-gray-700'>
        <div className="">
            Notifications
        </div>
        <button>
            <X className='text-gray-400 p-1 hover:text-red-500 hover:bg-gray-600 rounded-lg' />
        </button>
    </li>
  )
};

export default NotificationsItem;
