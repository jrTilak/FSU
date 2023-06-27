import Image from "next/image";

const Gallery = ({ gallery }) => {
    return (
        <div
            className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
            <div className=" relative lg:w-40 w-64 h-40 lg:h-40 overflow-hidden rounded-xl ">
                <Image
                    fill="true"
                    src={gallery[0]}
                    alt=""
                    className="absolute object-cover" />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center">
                <div className=" relative w-32 lg:w-40 h-52 lg:h-32 overflow-hidden rounded-xl ">
                    <Image
                        fill="true"
                        src={gallery[1]}
                        alt=""
                        className="absolute object-cover " />
                </div>
                <div className=" relative w-32 lg:w-40 h-52 lg:h-48 overflow-hidden rounded-xl ">
                    <Image
                        fill="true"
                        src={gallery[2]}
                        alt=""
                        className="absolute object-cover " />
                </div>
            </div>
            <div className=" relative lg:w-60 w-64 h-96 lg:h-96 overflow-hidden rounded-xl ">
                <Image
                    fill="true"
                    src={gallery[3]}
                    alt=""
                    className="absolute object-cover " />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center ">
                <div className=" relative w-32 lg:w-40 h-52 lg:h-48 overflow-hidden rounded-xl ">
                    <Image
                        fill="true"
                        src={gallery[4]}
                        alt=""
                        className="absolute object-cover " />
                </div>
                <div className=" relative w-32 lg:w-40 h-52 lg:h-32 overflow-hidden rounded-xl ">
                    <Image
                        fill="true"
                        src={gallery[5]}
                        alt=""
                        className="absolute object-cover " />
                </div>
            </div>
            <div className=" relative lg:w-40 w-64 h-40 lg:h-40 overflow-hidden rounded-xl ">
                <Image
                    fill="true "
                    className="absolute object-cover "
                    src={gallery[6]}
                    alt="" />
            </div>
        </div>

    )
}
export default Gallery