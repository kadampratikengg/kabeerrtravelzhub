import { useEffect } from 'react';
import TemplateNavbar from '../components/TemplateNavbar';
import TemplateFooter from '../components/TemplateFooter';

export default function Destinations() {
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
            Explore Destinations
          </h1>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src='/assets/images/destinations/style1/pic1.jpg'
                alt='Destination 1'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>Beautiful Beach</h2>
                <p className='text-gray-600'>
                  Relax on pristine beaches with crystal clear waters.
                </p>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src='/assets/images/destinations/style1/pic2.jpg'
                alt='Destination 2'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>
                  Mountain Adventure
                </h2>
                <p className='text-gray-600'>
                  Experience thrilling mountain hikes and scenic views.
                </p>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img
                src='/assets/images/destinations/style1/pic3.jpg'
                alt='Destination 3'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-xl font-semibold mb-2'>City Exploration</h2>
                <p className='text-gray-600'>
                  Discover vibrant cities with rich culture and history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TemplateFooter />
    </>
  );
}
