import { useEffect } from 'react';
import TemplateNavbar from '../components/TemplateNavbar';
import TemplateFooter from '../components/TemplateFooter';

export default function Contact() {
  useEffect(() => {
    document.body.id = 'bg';
    document.body.className = 'selection:bg-[#484848] selection:text-white';
  }, []);

  return (
    <>
      <TemplateNavbar />
      <main className='py-20'>
        <div className='container'>
          <h1 className='text-4xl font-bold text-gray-900 text-center mb-16'>
            Contact Us
          </h1>
          <div className='grid grid-cols-2 gap-12 items-start'>
            {/* Form Column */}
            <div>
              <h2 className='text-2xl font-semibold mb-6 text-gray-900'>
                Send Us a Message
              </h2>
              <form className='bg-white p-8 rounded-lg shadow-md space-y-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    placeholder='your@email.com'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                    placeholder='Message Subject'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-40 resize-none'
                    placeholder='Your message here...'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details Column */}
            <div>
              <h2 className='text-2xl font-semibold mb-8 text-gray-900'>
                Contact Information
              </h2>
              <div className='space-y-6'>
                {/* Phone */}
                <div className='flex items-start'>
                  <div className='flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 flex-shrink-0'>
                    <i className='fa-solid fa-phone text-xl text-blue-600'></i>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                      Phone
                    </h3>
                    <a
                      href='tel:+919503953737'
                      className='text-gray-600 hover:text-blue-600 transition duration-300 text-base'
                    >
                      +91 9503953737
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start'>
                  <div className='flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 flex-shrink-0'>
                    <i className='fa-solid fa-envelope text-xl text-blue-600'></i>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                      Email
                    </h3>
                    <a
                      href='mailto:kabeerrtravelzhub@gmail.com'
                      className='text-gray-600 hover:text-blue-600 transition duration-300 text-base'
                    >
                      kabeerrtravelzhub@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className='flex items-start'>
                  <div className='flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mr-4 flex-shrink-0'>
                    <i className='fa-solid fa-house text-xl text-blue-600'></i>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                      Address
                    </h3>
                    <p className='text-gray-600 text-base leading-relaxed'>
                      405, HN More Complex, NDA Road, Shivane, Pune - 411023
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className='mt-10'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Follow Us
                  </h3>
                  <div className='flex gap-3'>
                    <a
                      href='https://www.facebook.com/dexignzone'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a
                      href='https://twitter.com/dexignzones'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center w-11 h-11 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300'
                    >
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      href='https://www.linkedin.com/showcase/3686700/admin/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center w-11 h-11 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-300'
                    >
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a
                      href='https://www.instagram.com/dexignzone/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center w-11 h-11 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TemplateFooter />
    </>
  );
}
