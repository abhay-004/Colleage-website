import React from 'react'

const Title = ({title,subtitle}) => {
  return (
    <div className='title text-center text-xl font-semibold uppercas'>
      <p>{subtitle}</p>
      <h2 className='text-3xl  mt-1.5'>{title}</h2>
    </div>
  )
}

export default Title
