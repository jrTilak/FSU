import Link from "next/link"

const Hero = () => {
    return (
        <>
            <div id="hero-section"
                className="flex justify-center bg-[url('../public/allMembers.jpg')] bg-no-repeat bg-center bg-cover p-5 md:p-16 mt-16 md:pt-8 bg-neutral-800/60 bg-blend-multiply"
            >
                <div className="flex flex-col justify-between  max-w-7xl  text-white items-center z-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-base font-medium tracking-wider ">Welcome to</h1>
                        <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; </span>
                        <div className="flex flex-col text-white mt-5 items-center">
                            <h1 className="text-3xl	 md:text-[50px] font-semibold">स्वतन्त्र विद्यार्थी युनियन,</h1>
                            <p className="text-base mt-2 md:mt-4 tracking-wide">इ.अ.सं, पूर्वाञ्चल क्याम्पस धरान</p>
                        </div>
                    </div>
                    {/* <p className="mt-4 text-sm tracking-wide md:leading-7  lg:hidden lg:text-base">Free Student Union (FSU) is a student-led organization operating within IOE Purwanchal Campus Dharan, with the primary purpose of advocating for the interests, rights, and welfare of students. Serving as the official representative body of the student community, we act as a vital intermediary between students and the institution&apos;s administration. By organizing campaigns, and events, we actively raise awareness and fight for issues such as affordable education, social justice, and freedom of expression for students. Overall, we play a vital role in safeguarding student rights, advocating for their welfare, and promoting an inclusive and empowering educational environment.</p>
                    <p className="mt-4 text-sm tracking-wide md:leading-7 hidden lg:block lg:text-base">Free Student Union (FSU) is a student-led organization operating within IOE Purwanchal Campus Dharan, with the primary purpose of advocating for the interests, rights, and welfare of students. Serving as the official representative body of the student community, we act as a vital intermediary between students and the institution&apos;s administration. By organizing campaigns, and events, we actively raise awareness and fight for issues such as affordable education, social justice, and freedom of expression for students. We also address student&apos;s welfare needs, offering support services and ensuring access to essential resources. By organizing extracurricular activities and cultural events, we foster a vibrant student community and promote a well-rounded educational experience. Through these initiatives, we enable students to develop leadership skills, teamwork, and organizational abilities, empowering them to actively participate in decision-making processes. Additionally, we often collaborate with other student organizations to oragnzie different programs for the welfare of students. Overall, we play a vital role in safeguarding student rights, advocating for their welfare, and promoting an inclusive and empowering educational environment.</p> */}
                    <div className="flex items-center flex-col">
                        <div className="space-x-3 md:mt-4">
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
                                <Link href="https://www.facebook.com/fsu.ioeerc" className="text-blue-700 bg-white rounded-full p-2 hover:bg-blue-700 hover:text-white">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 md:w-7 w-5 h-5 md:h-7" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link href="mailto:fsu.erc@ioepc.edu.np" className="text-blue-700 bg-white rounded-full p-2 ml-4 hover:bg-blue-700 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-7 w-5 h-5 md:h-7">
                                        <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                                        <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                                    </svg>
                                </Link>

                            </span>

                        </div>
                        <div id="hero-btn" className="flex mt-4 space-x-5 ">
                            <Link href="#hero-btn">
                                <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-50 font-semibold">Explore</button>
                            </Link>
                            <Link href="#contact">
                                <button
                                    className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-50 font-semibold">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Hero