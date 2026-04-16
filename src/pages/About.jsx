import { useEffect } from 'react';
import TemplateNavbar from '../components/TemplateNavbar';
import TemplateFooter from '../components/TemplateFooter';

export default function About() {
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
            <h1 className='text-4xl font-bold text-gray-900 mb-8'>About Us</h1>
            <p className='text-lg text-gray-700 mb-6'>
              Welcome to Kabeer Travelz Hub. We are dedicated to providing
              exceptional travel experiences and making your journeys
              unforgettable.
            </p>
            <p className='text-gray-600'>
              Our team of experienced travel professionals works tirelessly to
              curate the best destinations, accommodations, and activities for
              our clients. With years of expertise in the travel industry, we
              ensure every trip is tailored to your preferences and budget.
            </p>
          </div>
        </div>
      </main>
      <TemplateFooter />
    </>
  );
}
