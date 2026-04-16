import { useEffect } from 'react';
import TemplateNavbar from '../components/TemplateNavbar';
import TemplateFooter from '../components/TemplateFooter';

export default function Tours() {
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
            Our Tours
          </h1>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Adventure Tour</h2>
              <p className='text-gray-600 mb-4'>
                Experience thrilling adventures in exotic locations.
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4'>
                <li>Hiking and trekking</li>
                <li>Wildlife safari</li>
                <li>River rafting</li>
              </ul>
              <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                Book Now
              </button>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Cultural Tour</h2>
              <p className='text-gray-600 mb-4'>
                Immerse yourself in rich cultural experiences.
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4'>
                <li>Historical sites</li>
                <li>Local cuisine</li>
                <li>Traditional performances</li>
              </ul>
              <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                Book Now
              </button>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Relaxation Tour</h2>
              <p className='text-gray-600 mb-4'>
                Unwind in luxurious resorts and spas.
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4'>
                <li>Beach resorts</li>
                <li>Spa treatments</li>
                <li>Yoga sessions</li>
              </ul>
              <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                Book Now
              </button>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Family Tour</h2>
              <p className='text-gray-600 mb-4'>
                Create lasting memories with your family.
              </p>
              <ul className='list-disc list-inside text-gray-600 mb-4'>
                <li>Family-friendly activities</li>
                <li>Educational experiences</li>
                <li>Safe adventures</li>
              </ul>
              <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <TemplateFooter />
    </>
  );
}
