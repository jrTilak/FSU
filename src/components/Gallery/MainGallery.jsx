import React from 'react';
import Image from 'next/image';
import gallery from "../../../public/json/gallery.json";

const MainGallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32">
            {gallery.map((img, i) => {
                if (i % 6 === 0) {
                    return (
                        <div key={i} className=" flex flex-wrap  mt-2">
                            <div className="flex w-[100%] md:w-1/2 flex-wrap">
                                <div className="sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={gallery[i]}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={gallery[i + 1]}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="relative h-52 md:h-64 w-full p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="absolute block h-full w-full rounded-lg object-cover object-center"
                                        src={gallery[i + 2]}
                                        fill="cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex w-[100%] md:w-1/2 flex-wrap">
                                <div className="relative h-52 md:h-64 w-full p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="absolute block h-full w-full rounded-lg object-cover object-center"
                                        src={gallery[i + 3]}
                                        fill="cover"
                                    />
                                </div>
                                <div className="sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={gallery[i + 4]}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="sm:h-40 md:h-64 w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={gallery[i + 5]}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default MainGallery;
