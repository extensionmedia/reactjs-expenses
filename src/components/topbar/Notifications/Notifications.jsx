import React from 'react';
import { ChevronUp } from 'react-feather';
import NotificationsItem from './NotificationsItem';

const Notifications = () => {
  const notifs = [
    {
      "id"    :   1,
      "text"  :   "Vous avez attent le budget",
      "date"  :   "2022-02-02"
    },
    {
      "id"    :   2,
      "text"  :   "Une nouvelle connection",
      "date"  :   "2022-02-01"
    },
    {
      "id"    :   3,
      "text"  :   "Voua avez modifier",
      "date"  :   "2022-02-01"
    },
    {
      "id"    :   4,
      "text"  :   "Une simple tonification",
      "date"  :   "2022-01-31"
    }
  ]
  return (
    <div className='absolute top-10 right-1 w-80 md:w-96 bg-gray-800 text-white shadow-lg'>
        <div className="relative border-t-2 border-green-700">
            <ChevronUp className='absolute -top-5 right-0 text-green-700' />
            <ul>
              {
                notifs.map(
                  (item) =>(
                    <NotificationsItem item={item} key={item.id} />
                  )
                )
              }                
            </ul>
            <div className="text-center py-4 text-xs">
                Voir tous les notifications
            </div>
        </div>
        
    </div>
  )
};

export default Notifications;
