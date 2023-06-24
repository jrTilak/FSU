import Image from 'next/image'
import React from 'react'

const AboutFSU = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
                        <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                    </div>
                    <div className=" p-4 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className="relative h-0" style={{ paddingBottom: '83.33%' }}>
                            <Image
                                className="absolute inset-0 object-cover object-center rounded"
                                alt="hero"
                                src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/354466584_157280390682278_4225299725157064315_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&cb_f2e=control&ccb=1-7&_nc_sid=730e14&_nc_ohc=8GkUTO3v88MAX8FH6BM&_nc_ht=scontent.fbir1-1.fna&oh=00_AfA_OAt5N6cwYS7kJiE_9Gnr4owk3s3v08aeVkuxFL872Q&oe=649B0113"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutFSU