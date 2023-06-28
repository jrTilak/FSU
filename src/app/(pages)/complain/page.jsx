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
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pb-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-[1.5rem] md:text-4xl title-font text-gray-900 mt-5 font-semibold">Complain Form</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-centersli">Please use this form to submit a complaint or report any issues you have encountered. We value your feedback and strive to address your concerns promptly and fairly. Thank you for your contribution.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email <span className='text-gray-500 italic text-xs'>(to contact you later if necessary)</span></label>
                <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-[100%]">
              <div className="relative">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject/ Nature of Complain*</label>
                <input onChange={handleChange} value={formData.subject} type="text" id="subject" name="subject" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Description*</label>
                <textarea onChange={handleChange} value={formData.desc} id="message" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-44 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="else" className="leading-7 text-sm text-gray-600">Anything Else?</label>
                <textarea onChange={handleChange} value={formData.else} id="else" name="else" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>

              <div className="flex items-center">
                <input
                  onClick={handleConfidential}
                  id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " name='confidential' />
                <label htmlFor="confidential"
                  onClick={handleConfidential}

                  className="ml-2 text-sm font-medium text-gray-600 ">Mark this complain as <span className="text-blue-600 hover:underline">confidential</span>.</label>
              </div>
            </div>
            <div className="p-2 w-full">
              <button onClick={handleSubmit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a href='mailto:fsu.erc@ioepc.edu.np' className="text-indigo-500">fsu.erc@ioepc.edu.np</a>
              <p className="leading-normal my-5">Gangalal Marg, Tinkune,
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