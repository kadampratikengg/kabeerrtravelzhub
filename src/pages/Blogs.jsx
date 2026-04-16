import { useEffect } from 'react';
import TemplateNavbar from '../components/TemplateNavbar';
import TemplateFooter from '../components/TemplateFooter';

export default function Blogs() {
  useEffect(() => {
    document.body.id = 'bg';
    document.body.className = 'selection:bg-[#484848] selection:text-white';
  }, []);

  return (
    <>
      <TemplateNavbar />
      <main className='py-20'>
        <div className='container'>
          <h1 className='text-4xl font-bold text-gray-900 text-center mb-12'>
            Travel Blog
          </h1>
          <div className='grid md:grid-cols-3 gap-8'>
            <article className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src='/assets/images/trv-blog/blog-lg/pic1.jpg'
                alt='Blog 1'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>
                  Top 10 Beach Destinations
                </h2>
                <p className='text-gray-600 mb-4'>
                  Discover the most beautiful beaches around the world...
                </p>
                <a href='#' className='text-blue-600 hover:text-blue-800'>
                  Read More →
                </a>
              </div>
            </article>
            <article className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src='/assets/images/trv-blog/blog-lg/pic2.jpg'
                alt='Blog 2'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>
                  Adventure Travel Tips
                </h2>
                <p className='text-gray-600 mb-4'>
                  Essential tips for your next adventure trip...
                </p>
                <a href='#' className='text-blue-600 hover:text-blue-800'>
                  Read More →
                </a>
              </div>
            </article>
            <article className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src='/assets/images/trv-blog/blog-lg/pic3.jpg'
                alt='Blog 3'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>
                  Cultural Experiences
                </h2>
                <p className='text-gray-600 mb-4'>
                  Immerse yourself in local cultures and traditions...
                </p>
                <a href='#' className='text-blue-600 hover:text-blue-800'>
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>
      <TemplateFooter />
    </>
  );
}
