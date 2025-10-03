import React from 'react'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus my-20 mx-auto w-11/12 text-center'>
      <div className="gallery flex items-center justify-between">
        <img src={gallery_1}  />
        <img src={gallery_2}  />
        <img src={gallery_3}  />
        <img src={gallery_4}  />
      </div>
      <button className='btn dark_btn'>See more here <img src={white_arrow} /></button>
    </div>
  )
}

export default Campus
