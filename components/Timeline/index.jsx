import React from 'react'

const TimelineItem = ({avatar = './assets/avatar.png', userName ='',date='', text=''}) => {
  return (
    <div className='mt-6'>
        <div className='flex'>
             <img className='w-9' src={avatar} alt='not found' />
             <div className='ml-2'>
                <p className='font-bold text-xs'>{userName}</p>
                <p className='text-xs text-age-gray-1 mt-1'>{date}</p>
             </div>
        </div>
        <div className='text-xs mt-2' dangerouslySetInnerHTML={{ __html: text}}/>
    </div>
  )
}

export default TimelineItem;