import Link from "next/link"

const Hero = () => {
    return (
        <>
            <div className="flex justify-center sm:mt-16 bg-blue-900 p-5 md:p-16 md:mt-0 md:pt-8 lg:p-28 lg:mt-0">
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
                        <a href="#"> <i
                            className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
                        </a>
                        <a href="#"> <i
                            className="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                        </a>
                        <a href="#"> <i
                            className="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i>
                        </a>
                        <a href="#"> <i
                            className="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                        </a>

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