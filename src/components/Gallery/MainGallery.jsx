"use client"
import React from 'react'
import gallery from  "../../../public/json/gallery.json"
console.log(gallery)
const MainGallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mt-16">
            {/* <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className=" h-64 w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={gallery[0]} />
                    </div>
                    <div className=" h-64 w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={gallery[1]} />
                    </div>
                    <div className=" h-64 w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={gallery[2]} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className=" h-64 w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={gallery[3]} />
                    </div>
                    <div className=" h-64 w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={gallery[4]} />
                    </div>
                    <div className=" h-64 w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={gallery[5]} />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MainGallery