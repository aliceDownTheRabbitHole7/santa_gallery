import React from 'react'
import galleryData from '../data/galleryData'

const galleryMap = galleryData.map((photo, i) => <img src={photo.img} key={i} className={photo.class} />)

const Gallery = () => {
  return (
    <div className='gallery-container'>
      {galleryMap}
    </div>
  )
}

export default Gallery

