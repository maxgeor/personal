import React from 'react'

export default function Tile({ position, textColor = 'inherit', backgroundColor = 'inherit', children }) {
  const even = (num) => num % 2 === 0;

  const styles = {
    'color:hover': textColor,
    'backgroundColor:hover' : backgroundColor,
  }

  return (
    <div 
      style={styles}
      className={`
        col-span-6 py-9 px-6 md:p-9 outline outline-1 mr-px mb-px outline-gray-500 overflow-hidden
      `}
      >
      <div className={`
        flex flex-col justify-between gap-y-9 w-full h-full
      `}>
      {/* <div className={`
        ${even(position) ? 'md:mr-auto' : 'md:ml-auto'}
        flex flex-col justify-between gap-y-9 max-w-3xl w-full h-full
      `}> */}
        {children}   
      </div>
    </div>
  )
}
