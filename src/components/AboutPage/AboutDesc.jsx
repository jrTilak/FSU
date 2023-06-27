import Image from 'next/image'
import React from 'react'

const AboutFSU = (props) => {
    return (
        <>
            <section
                className="text-gray-600 body-font"
            >
                <div
                    className="container mx-auto flex px-5 max-w-6xl md:flex-row flex-col items-center"
                >
                    <div
                        className="lg:flex-grow flex flex-col md:items-start md:text-left md:mb-0 items-center text-center sm:m-2 md:m-4 lg:m-12"
                    >
                        <h1
                            className={` title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 underline underline-offset-4 xs:text-center w-[100%] ${props.headingCss}`}
                        >{props.title}</h1>
                        <div>
                            <div
                                className="imageContainer"
                                style={{
                                    float: props.float
                                }}
                            >
                                <Image
                                    className={`rounded  mx-4`}
                                    alt="hero"
                                    src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/354466584_157280390682278_4225299725157064315_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&cb_f2e=control&ccb=1-7&_nc_sid=730e14&_nc_ohc=8GkUTO3v88MAX8FH6BM&_nc_ht=scontent.fbir1-1.fna&oh=00_AfA_OAt5N6cwYS7kJiE_9Gnr4owk3s3v08aeVkuxFL872Q&oe=649B0113"
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