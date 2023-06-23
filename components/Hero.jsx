import Link from "next/link"

const Hero = () => {
    return (
        <>
            <div id="hero-section" className="flex justify-center bg-blue-900 p-5 md:p-16 md:mt-0 md:pt-8  pt-20">
                <div className="flex flex-col justify-center  max-w-7xl  text-white">
                    <h1 className="text-base font-medium tracking-wider ">Welcome to</h1>
                    <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; </span>
                    <div className="flex flex-col text-white mt-5">
                        <h1 className="text-4xl md:text-[50px] font-semibold">स्वतन्त्र विद्यार्थी युनियन,</h1>
                        <p className="text-xl mt-2 md:mt-4 tracking-wide">इ.अ.सं, पूर्वाञ्चल क्याम्पस धरान</p>
                    </div>
                    <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit officia pariatur exercitationem vitae iure eaque perspiciatis veniam ea aut, atque est, sit excepturi blanditiis id maiores delectus harum quasi, inventore tenetur consectetur. Earum, labore hic nesciunt inventore corrupti dolor ex ut, blanditiis aperiam distinctio culpa quasi explicabo aliquam! Amet, quasi?</p>
                    <div className="space-x-3 mt-6 md:mt-4">
                        <Link href="https://www.facebook.com/fsu.ioeerc"> <i
                            className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
                        </Link>
                        <Link href="mailto:fsu.erc@ioepc.edu.np"> <i className=" fa-brands fa-solid fa-circle-envelope bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center relative top-3">
                            <svg
                             xmlns="http://www.w3.org/2000/svg" 
                             viewBox="0 0 24 24" fill="currentColor"
                              className="w-5 h-5 relative bottom-1 right-1">
                                <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                                <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                            </svg>

                        </i>
                        </Link>

                    </div>
                    <div id="hero-btn" className="flex mt-10 space-x-5">
                        <Link href="#hero-btn">
                            <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-50 font-semibold">Explore</button>
                        </Link>
                        <Link href="/contact">
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