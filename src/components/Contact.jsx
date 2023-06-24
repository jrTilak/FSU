"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.message.trim() !== '') {
            emailjs.send('service_u9yrnxb', 'template_ilskbae', formData, "4OLqdexocj5-pNRvS")
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormData({
                        from_name: '',
                        reply_to: '',
                        message: ''
                    })
                }, function (error) {
                    console.log('FAILED...', error);
                });
        }
        else {
            console.error("Field is empty");
        }
        console.log(formData);
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
                            <a className="text-indigo-500 leading-relaxed">fsu.erc@ioepc.edu.np</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <form
                    className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Mail Us:</h2>
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
                        Submit
                    </button>
                </form>
            </div>
        </section >
    )
}
export default Contact