"use client"
import React from 'react'
import gallery from "../../../public/json/gallery.json"
console.log(gallery)
const MainGallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mt-16">
            {
                gallery.map((img, i) => {
                    if (i % 6 === 0) {
                        return (
                            <div key={i} className="-m-1 flex flex-wrap md:-m-2">
                                <div className="flex w-1/2 flex-wrap">
                                    <div className=" sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={gallery[i]} />
                                    </div>
                                    <div className=" sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={gallery[i+1]} />
                                    </div>
                                    <div className=" sm:h-40 md:h-64 w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={gallery[i+2]} />
                                    </div>
                                </div>
                                <div className="flex w-1/2 flex-wrap">
                                    <div className=" sm:h-40 md:h-64 w-full p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={gallery[i+3]} />
                                    </div>
                                    <div className=" sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={gallery[i+4]} />
                                    </div>
                                    <div className=" sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                        <img
                                            alt="gallery"
                                            className="block h-full w-full rounded-lg object-cover object-center"
                                            src={gallery[i+5]} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

        </div>
    )
}

export default MainGallery