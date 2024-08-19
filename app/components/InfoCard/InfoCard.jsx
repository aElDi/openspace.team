import React from 'react'

export function InfoCard({title, desc}) {
  return (
    <div className='flex flex-col gap-1 px-6 py-4 h-fit lg:w-80 bg-boxcolor border-1 border-blinkbox rounded-xl hover:scale-105 transition-all '>
      <h2 className='text-lg lg:text-xl font-medium w-fit'>{title}</h2>
      <span className='text-sm opacity-50 w-full'>
        {desc}
      </span>
    </div>
  )
}
