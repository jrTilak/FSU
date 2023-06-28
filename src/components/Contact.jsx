"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useGlobalContext } from "@/app/GlobalContext";

const Contact = () => {
    const { handleAlert, isSubmitting, setIsSubmitting } = useGlobalContext()
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: '',
        submit_date: new Date().toLocaleString()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ ...formData, submit_date: new Date().toLocaleString() });
        if (formData.message.trim() !== '') {
            setIsSubmitting(true)
            emailjs.send(
                'service_u9yrnxb',
                'template_ilskbae',
                formData,
                "4OLqdexocj5-pNRvS"
            )
                .then(function () {
                    handleAlert("success", "Thanks for contacting us. We'll get back to you soon.")
                    setFormData({
                        from_name: '',
                        reply_to: '',
                        message: '',
                        submit_date: new Date().toLocaleString()
                    })
                    setIsSubmitting(false)
                }, function (error) {
                    console.log(error);
                    handleAlert("error", "Something went wrong. Please try again later.")
                    setIsSubmitting(false)
                });
        }
        else {
            handleAlert("error", "Message is empty")
        }
    };

    const handleChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        switch (target) {
            case 'name':
                setFormData({ ...formData, from_name: value });
                break;
            case 'email':
                setFormData({ ...formData, reply_to: value });
                break;
            case 'message':
                setFormData({ ...formData, message: value });
                break;
            default:
                break;
        }
    };
    return (
        < section className="text-gray-600 body-font relative" >
            <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap ">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7122.828432168656!2d87.2915979!3d26.7949365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b606ce89f9%3A0x7423e72f8e139e05!2sPurwanchal%20Engineering%20Campus(ERC)!5e0!3m2!1sen!2snp!4v1687449683358!5m2!1sen!2snp" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1"> Gangalal Marg, Tinkune, Dharan-8, Sunsari</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:fsu.erc@ioepc.edu.np" className="text-indigo-500 leading-relaxed">fsu.erc@ioepc.edu.np</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <a href="tel:9804368740" className="leading-relaxed text-indigo-500">9804368740</a>
                        </div>
                    </div>
                </div>
                <form
                    className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us:</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Leave us a message</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={handleChange}
                            value={formData.from_name}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={handleChange}
                            value={formData.reply_to}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={handleChange}
                            value={formData.message}
                        >
                        </textarea>
                    </div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" role="submit"
                        onClick={handleSubmit}
                    >
                        {isSubmitting ?
                            <span className="flex justify-center">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />

                                </svg>
                            </span>
                            :
                            <>
                                Submit
                            </>
                        }
                    </button>
                </form>
            </div>
        </section >
    )
}
export default Contact