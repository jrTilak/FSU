import Link from "next/link"

const Hero = () => {
    return (
        <>
            <div id="hero-section" className="flex justify-center bg-blue-900 p-5 md:p-16 md:mt-0 md:pt-8  pt-20">
                <div className="flex flex-col justify-center  max-w-7xl  text-white items-center">
                    <h1 className="text-base font-medium tracking-wider ">Welcome to</h1>
                    <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; </span>
                    <div className="flex flex-col text-white mt-5 items-center">
                        <h1 className="text-4xl md:text-[50px] font-semibold">स्वतन्त्र विद्यार्थी युनियन,</h1>
                        <p className="text-xl mt-2 md:mt-4 tracking-wide">इ.अ.सं, पूर्वाञ्चल क्याम्पस धरान</p>
                    </div>
                    <p className="mt-4 text-sm tracking-wide leading-7">A Free Student Union (FSU) is a student-led organization operating within educational institutions, such as colleges and universities, with the primary purpose of advocating for the interests, rights, and welfare of students. Serving as the official representative body of the student community, FSUs act as a vital intermediary between students and the institution's administration. Through their proactive engagement, FSUs champion student concerns, demands, and aspirations, striving to create an environment conducive to holistic student development. FSUs fulfill their mandate through various means, including advocacy and activism, welfare support, policy development, student services, leadership development, and external engagement. By organizing protests, campaigns, and events, FSUs actively raise awareness and fight for issues such as affordable education, social justice, and freedom of expression. They also address students' welfare needs, offering support services and ensuring access to essential resources. Moreover, FSUs contribute to policy discussions, providing valuable input on matters such as curriculum, examination systems, and campus regulations. By organizing extracurricular activities and cultural events, FSUs foster a vibrant student community and promote a well-rounded educational experience. Through these initiatives, FSUs enable students to develop leadership skills, teamwork, and organizational abilities, empowering them to actively participate in decision-making processes. Additionally, FSUs often collaborate with other student organizations, NGOs, and community groups to address broader societal issues, reinforcing a network of student activism and solidarity. Overall, FSUs play a vital role in safeguarding student rights, advocating for their welfare, and promoting an inclusive and empowering educational environment.</p>
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
                    <div id="hero-btn" className="flex mt-10 space-x-5 ">
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
        </>
    )
}
export default Hero