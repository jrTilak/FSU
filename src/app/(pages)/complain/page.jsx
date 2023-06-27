"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useGlobalContext } from '@/app/GlobalContext'

const Complain = () => {
  const { handleAlert, isSubmitting, setIsSubmitting } = useGlobalContext()
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

  const handleConfidential = () => {
    setFormData({
      ...formData,
      confidential: formData.confidential ? false : true
    })
  }

  const handleSubmit = () => {
    setFormData({ ...formData, date: new Date().toLocaleString() });
    if (formData.desc.trim() !== '') {
      setIsSubmitting(true)
      emailjs.send(
        'service_u9yrnxb',
        'template_on4bslw',
        formData,
        "4OLqdexocj5-pNRvS"
      )
        .then(function () {
          handleAlert("success", "Thanks!, We'll get back to you soon.")
          setFormData({
            name: '',
            email: '',
            date: new Date().toLocaleString(),
            subject: '',
            desc: '',
            else: '',
            confidential: false
          })
          setIsSubmitting(false)

        }, function (error) {
          handleAlert("error", "Something went wrong. Please try again later.")
          console.log(error);
          setIsSubmitting(false)
        });
    }
    else {
      handleAlert("error", "Filed marked with * are required.")
    }
  }
  return (
    <section class="text-gray-600 body-font relative">
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
              <button onClick={handleSubmit} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {isSubmitting ?
                  <span className="flex justify-center">
                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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