import { useEffect } from 'react';
import TemplateNavbar from '../components/TemplateNavbar';
import TemplateFooter from '../components/TemplateFooter';

export default function Pages() {
  useEffect(() => {
    document.body.id = 'bg';
    document.body.className = 'selection:bg-[#484848] selection:text-white';
  }, []);

  return (
    <>
      <TemplateNavbar />
      <main className='py-20'>
        <div className='container'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-8'>Our Pages</h1>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>FAQ</h2>
                <p className='text-gray-600'>
                  Find answers to common questions about our services.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>Pricing</h2>
                <p className='text-gray-600'>
                  Explore our competitive pricing plans.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>Error 404</h2>
                <p className='text-gray-600'>
                  Custom 404 error page for better user experience.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>Compare</h2>
                <p className='text-gray-600'>
                  Compare different travel packages and options.
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
