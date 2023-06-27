"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Complain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: new Date().toLocaleString(),
    subject: '',
    desc: '',
    else: '',
    confidential: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleConfidential = (e) => {
    setFormData({
      ...formData,
      confidential: formData.confidential ? false : true
    })
  }

  const handleSubmit = () => {
    setFormData({ ...formData, submit_date: new Date().toLocaleString() });
    if (formData.desc.trim() !== '') {
      emailjs.send(
        'service_u9yrnxb',
        'template_on4bslw',
        formData,
        "4OLqdexocj5-pNRvS"
      )
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            name: '',
            email: '',
            date: new Date().toLocaleString(),
            subject: '',
            desc: '',
            else: '',
            confidential: false
          })
        }, function (error) {
          console.log('FAILED...', error);
        });
    }
    else {
      console.error("Field is empty");
    }
  }
  return (
    <section class="text-gray-600 body-font relative mt-16">
      <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Complain Form</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">Please use this form to submit a complaint or report any issues you have encountered. We value your feedback and strive to address your concerns promptly and fairly. Thank you for your contribution.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Full Name</label>
                <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email <span className='text-gray-500 italic text-xs'>(to contact you later if necessary)</span></label>
                <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-[100%]">
              <div class="relative">
                <label for="subject" class="leading-7 text-sm text-gray-600">Subject/ Nature of Complain*</label>
                <input onChange={handleChange} value={formData.subject} type="text" id="subject" name="subject" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="desc" class="leading-7 text-sm text-gray-600">Description*</label>
                <textarea onChange={handleChange} value={formData.desc} id="message" name="desc" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-44 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="else" class="leading-7 text-sm text-gray-600">Anything Else?</label>
                <textarea onChange={handleChange} value={formData.else} id="else" name="else" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>

              <div class="flex items-center">
                <input
                  onClick={handleConfidential}
                  id="link-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " name='confidential' />
                <label for="confidential"
                  onClick={handleConfidential}

                  class="ml-2 text-sm font-medium text-gray-600 ">Mark this complain as <span class="text-blue-600 hover:underline">confidential</span>.</label>
              </div>
            </div>
            <div class="p-2 w-full">
              <button onClick={handleSubmit} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href='mailto:fsu.erc@ioepc.edu.np' class="text-indigo-500">fsu.erc@ioepc.edu.np</a>
              <p class="leading-normal my-5">Gangalal Marg, Tinkune,
                <br />Dharan-8, Sunsari
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Complain