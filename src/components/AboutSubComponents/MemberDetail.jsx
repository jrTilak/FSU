import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// {
//     "name": "Nabin Shrestha",
//     "contact": [
//         "9804368740"
//     ],
//     "email": "075bag017@ioepc.edu.np",
//     "img": "/members/NabinShrestha.jpg"
// },

const MemberDetail = ({ details }) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-col text-center w-full">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 underline underline-offset-4">FSU Community</h1>
                    
                </div>
                <div className='flex items-center flex-col'>
                    <div className='mb-6'>
                        <div className="imageContainer flex items-center w-32 h-32 md:w-60 md:h-60 relative m-4">
                            <Image
                                class="rounded-full border-2 border-neutral-900"
                                src="/members/NabinShrestha.jpg"
                                alt="image description"
                                fill="cover"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2 ">
                            <h1 className="text-gray-900 title-font font-semibold text-2xl">Nabin Shrestha</h1>
                            <p className="text-gray-500 text-lg">President</p>
                            <span className="min-w-[50%] flex sm:mt-0 flex items-center justify-evenly gap-4">
                                <Link href="/" className="text-gray-500 pr-2">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link href="mailto:075bag017@ioepc.edu.np" className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                                        <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                                    </svg>
                                </Link>
                                <Link href="tel:9804368740" className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-wrap m-2">
                        {details.map((member) => {
                            return (
                                <div class="p-2 lg:w-1/3 md:w-1/2 w-full relative" key={member.name}>
                                    <span className="inline-flex sm:ml-auto sm:mt-0 flex flex-col absolute right-6 top-2 h-[80%] justify-evenly">
                                        {member.facebook &&
                                            <Link href={member.facebook} className="text-gray-500 pr-2">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </Link>
                                        }
                                        {member.email &&
                                            <Link href={`mailto:${member.email}`} className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                    <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                                                    <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                                                </svg>
                                            </Link>
                                        }
                                        {member.contact &&
                                            <Link href={`tel:${member.contact[0]}`} className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                            </Link>
                                        }

                                    </span>
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <Image
                                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                            alt="team"
                                            src={member.img ? member.img : 'https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png'}
                                            width={80}
                                            height={80}
                                        />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">{member.name}</h2>
                                            <p className="text-gray-500">Member</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MemberDetail