import React from 'react'

const ComponentSection = (props) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full">
                <h1
                    className="text-[1.5rem] md:text-4xl title-font text-gray-900 mt-5 font-semibold "
                >{props.title}</h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 md:mb-8  dark:bg-gray-700" />
            </div>
            <div
                id="news"
                className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap -m-4"></div>
                {props.children}
            </div>
        </section >
    )
}
export default ComponentSection