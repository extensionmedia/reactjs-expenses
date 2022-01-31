import React from 'react';
import moment from 'moment';

function BottomBar() {
  return (
    <div className='h-8 justify-items-center text-center text-gray-500'>
        Expense v1.0 - {moment().year()}
    </div>
)}

export default BottomBar
