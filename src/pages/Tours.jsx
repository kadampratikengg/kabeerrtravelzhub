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
      <main>
        <div className='bg-lightturquoise sm:mx-15 xl:pb-26.5 pb-5 xl:pt-30 pt-12.5'>
          <div className='container-fluid'>
            <div className='text-center max-w-150 mx-auto md:mb-15 mb-7.5'>
              <h2 className='xl:text-46 md:text-40 text-3xl mb-2.5'>
                Explore Popular
                <span className='text-citrusyellow'> Tours!</span>
              </h2>
              <p className='text-base'>
                Destinations worth exploring! Here are a few popular spots
              </p>
              <div className='-mt-7'>
                <img
                  src='/assets/images/background/Title-Separator.png'
                  alt='Image'
                  className='w-117.5 inline-block'
                  width='470'
                  height='70'
                  loading='lazy'
                />
              </div>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-8'>
              <div className='mx-3.75'>
                <div className='rounded-tl-3xl rounded-tr-3xl overflow-hidden relative'>
                  <a href='/tours'>
                    <img
                      src='/assets/images/tour/style1/pic3.jpg'
                      alt='Tokyo City Japan'
                      className='xl:h-105 h-80 w-full object-cover object-center'
                      width='309'
                      height='500'
                      loading='lazy'
                    />
                  </a>
                  <div className='absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center'>
                    <i className='text-xl mr-2.5 fa-regular fa-calendar-days'></i>
                    <span className='block'>6 days , 3 Nights</span>
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500'>
                    <h3 className='2xl:text-28 text-2xl font-medium'>
                      <a href='/tours' className='text-white'>
                        <i className='fa-solid fa-location-dot'></i> Tokyo City
                        Japan
                      </a>
                    </h3>
                  </div>
                </div>
                <div className='bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]'>
                  <div className='mb-7.5 flex'>
                    <div className='w-full text-xl/[1.3] font-title font-medium'>
                      <a
                        href='/tours'
                        className='text-primary hover:text-citrusyellow duration-500'
                      >
                        The bridge offers panoramic views of Tokyo Tower, the
                        skyline.
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='trv-book'>
                      <a href='/tours' className='site-button outline'>
                        Call Now
                      </a>
                    </div>
                    <div>
                      <span>(4.8 Review)</span>
                      <div className='text-citrusyellow'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mx-3.75'>
                <div className='rounded-tl-3xl rounded-tr-3xl overflow-hidden relative'>
                  <a href='/tours'>
                    <img
                      src='/assets/images/tour/style1/pic4.jpg'
                      alt='Plateau in Slovenia'
                      className='xl:h-105 h-80 w-full object-cover object-center'
                      width='309'
                      height='500'
                      loading='lazy'
                    />
                  </a>
                  <div className='absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center'>
                    <i className='text-xl mr-2.5 fa-regular fa-calendar-days'></i>
                    <span className='block'>8 days , 3 Nights</span>
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500'>
                    <h3 className='2xl:text-28 text-2xl font-medium'>
                      <a href='/tours' className='text-white'>
                        <i className='fa-solid fa-location-dot'></i> Plateau in
                        Slovenia
                      </a>
                    </h3>
                  </div>
                </div>
                <div className='bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]'>
                  <div className='mb-7.5 flex'>
                    <div className='w-full text-xl/[1.3] font-title font-medium'>
                      <a
                        href='/tours'
                        className='text-primary hover:text-citrusyellow duration-500'
                      >
                        Nusa Penida is a stunning island located just southeast
                        of Bali
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='trv-book'>
                      <a href='/tours' className='site-button outline'>
                        Call Now
                      </a>
                    </div>
                    <div>
                      <span>(4.8 Review)</span>
                      <div className='text-citrusyellow'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mx-3.75'>
                <div className='rounded-tl-3xl rounded-tr-3xl overflow-hidden relative'>
                  <a href='/tours'>
                    <img
                      src='/assets/images/tour/style1/pic5.jpg'
                      alt='Switzerland Tour Package'
                      className='xl:h-105 h-80 w-full object-cover object-center'
                      width='309'
                      height='500'
                      loading='lazy'
                    />
                  </a>
                  <div className='absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center'>
                    <i className='text-xl mr-2.5 fa-regular fa-calendar-days'></i>
                    <span className='block'>4 days , 2 Nights</span>
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500'>
                    <h3 className='2xl:text-28 text-2xl font-medium'>
                      <a href='/tours' className='text-white'>
                        <i className='fa-solid fa-location-dot'></i> Switzerland
                        Tour Package
                      </a>
                    </h3>
                  </div>
                </div>
                <div className='bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]'>
                  <div className='mb-7.5 flex'>
                    <div className='w-full text-xl/[1.3] font-title font-medium'>
                      <a
                        href='/tours'
                        className='text-primary hover:text-citrusyellow duration-500'
                      >
                        Deogyusan mountain. Its highest peak is 1,614 m. above
                        sea level
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='trv-book'>
                      <a href='/tours' className='site-button outline'>
                        Call Now
                      </a>
                    </div>
                    <div>
                      <span>(4.8 Review)</span>
                      <div className='text-citrusyellow'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mx-3.75'>
                <div className='rounded-tl-3xl rounded-tr-3xl overflow-hidden relative'>
                  <a href='/tours'>
                    <img
                      src='/assets/images/tour/style1/pic6.jpg'
                      alt='Tokyo City Japan'
                      className='xl:h-105 h-80 w-full object-cover object-center'
                      width='309'
                      height='500'
                      loading='lazy'
                    />
                  </a>
                  <div className='absolute top-7.5 left-0 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-tr-5xl rounded-br-5xl flex items-center'>
                    <i className='text-xl mr-2.5 fa-regular fa-calendar-days'></i>
                    <span className='block'>6 days , 3 Nights</span>
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-caribbeanlight backdrop-blur duration-500'>
                    <h3 className='2xl:text-28 text-2xl font-medium'>
                      <a href='/tours' className='text-white'>
                        <i className='fa-solid fa-location-dot'></i> Tokyo City
                        Japan
                      </a>
                    </h3>
                  </div>
                </div>
                <div className='bg-white p-7.5 rounded-bl-3xl rounded-br-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]'>
                  <div className='mb-7.5 flex'>
                    <div className='w-full text-xl/[1.3] font-title font-medium'>
                      <a
                        href='/tours'
                        className='text-primary hover:text-citrusyellow duration-500'
                      >
                        The bridge offers panoramic views of Tokyo Tower, the
                        skyline.
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='trv-book'>
                      <a href='/tours' className='site-button outline'>
                        Call Now
                      </a>
                    </div>
                    <div>
                      <span>(4.8 Review)</span>
                      <div className='text-citrusyellow'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                      </div>
                    </div>
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
