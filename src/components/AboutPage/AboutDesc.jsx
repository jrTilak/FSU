import Image from 'next/image'
import React from 'react'

const AboutFSU = (props) => {
    return (
        <>
            <section
                className="text-gray-600 body-font "
            >
                <div
                    className="container mx-auto flex px-5 max-w-6xl md:flex-row flex-col items-center "
                >
                    <div
                        className="lg:flex-grow flex flex-col md:items-start md:text-left md:mb-0 items-center text-center sm:m-2 "
                        style={
                            {
                                marginTop: '1rem'
                            }
                        }
                    >
                        <h1
                            className={` title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 underline underline-offset-4 xs:text-center w-[100%] sm:mt-4 md:mt-0 ${props.headingCss}`}
                        >{props.title}</h1>
                        <div>
                            <div
                                className="imageContainer"
                                style={{
                                    float: props.float
                                }}
                            >
                                <Image
                                    className={`rounded  md:mx-4`}
                                    alt="hero"
                                    src={props.img}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p
                                className="text-justify text-lg">
                                {props.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutFSU