import React from 'react';
import { ChevronUp } from 'react-feather';
import NotificationsItem from './NotificationsItem';

const Notifications = () => {
  return (
    <div className='absolute top-10 right-1 w-80 md:w-96 bg-gray-800 text-white shadow-lg'>
        <div className="relative border-t-2 border-green-700">
            <ChevronUp className='absolute -top-5 right-0 text-green-700' />
            <ul>
                <NotificationsItem />
                <NotificationsItem />
                <NotificationsItem />
                <NotificationsItem />
                <NotificationsItem />
                <NotificationsItem />
            </ul>
            <div className="text-center py-4 text-xs">
                Voir tous les notifications
            </div>
        </div>
        
    </div>
  )
};

export default Notifications;
