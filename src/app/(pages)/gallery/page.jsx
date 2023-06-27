import MainGallery from '@/components/Gallery/MainGallery'
import React from 'react'

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full  mt-16">
        <h1
          className="text-[1.5rem] md:text-4xl title-font text-gray-900 mt-5 font-semibold "
        >Gallery</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 md:mb-8  dark:bg-gray-700" />
      </div>
      <MainGallery />
    </>
  )
}

export default Gallery