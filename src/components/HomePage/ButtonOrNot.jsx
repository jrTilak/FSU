import Link from "next/link"

export const ButtonOrNot = ({ len, btnText, altText }) => {
    return (
        <>
            {
                len > 3
                    ?
                    <div className="flex items-center justify-center mt-4">
                        <Link href="/events">
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >{btnText}</button>
                        </Link>
                    </div>
                    :
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span
                            className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2"
                        >{altText}.</span>
                    </div>
            }
        </>
    )
}