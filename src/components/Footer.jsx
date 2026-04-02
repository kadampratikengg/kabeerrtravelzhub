export default function Footer() {
  return (
    <footer className="pt-20 bg-primary bg-cover bg-[url(../images/background/ftr-dark-bg.png)]">
      <div className="-mt-40">
        <div className="container bg-citrusyellow rounded-3xl md:flex items-center justify-between !py-6.25 lg:!px-17.5 sm:!px-10.5 !px-5.5 max-w-324">
          <div className="pr-5 max-lg:w-1/2 max-md:w-full">
            <div className="text-primary font-display lg:text-80 sm:text-46 text-28 leading-[0.75] sm:text-shadow-[2px_3px_0px_rgba(255,255,255,0.72)] pb-5">
              <span className="text-white inline-block">Subscribe</span> Now!
            </div>
            <div className="text-primary text-xl font-medium font-title max-md:mb-5">
              Sign up to searing weekly newsletter to get the latest updates.
            </div>
          </div>
          <div className="p-1.5 bg-paleaqua rounded-full max-w-107 flex-1 h-20">
            <form className="dzSubscribe">
              <div className="dzSubscribeMsg"></div>
              <div className="flex relative">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  name="news-letter"
                  required
                  type="email"
                  id="newsletter-email"
                  autoComplete="email"
                  className="form-control !h-17 !border-0 outline-none !py-2.5 !pl-5 !pr-17.5 rounded-full !text-2xs !leading-5 bg-white focus:text-[#212529] focus:bg-transparent focus:shadow-[0_1px_3px_0_rgba(0,0,0,0.6)] placeholder:text-primary"
                  placeholder="Email address..."
                />
                <button
                  type="submit"
                  className="text-28 text-white rounded-full size-15 bg-primary absolute top-1.25 right-1.25 duration-500 cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sm:pt-20 pt-10 text-white/06 border-b border-primary">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-3 col-span-12 sm:px-3.75">
              <div className="mb-10">
                <div className="mb-10 text-center block max-w-48.25 after:table after:clear-both">
                  <a href="#" data-disabled="spa" className="inline-block">
                    <img
                      src="/assets/logo.png"
                      alt="Kabeerr Travelz Hub"
                      className="mx-auto object-contain h-16 w-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
                <p className="sm:pr-12.5 mb-4 text-base text-white/50">
                  Kabeerr Travelz Hub is your travel partner for curated tours, transfers, and holiday planning.
                </p>
                <ul className="mt-5">
                  {[
                    { href: 'https://www.x.com/', icon: 'fa-x-twitter' },
                    { href: 'https://www.facebook.com/', icon: 'fa-facebook' },
                    { href: 'https://www.instagram.com/', icon: 'fa-instagram' },
                    { href: 'https://www.pinterest.com/', icon: 'fa-pinterest' },
                  ].map(({ href, icon }) => (
                    <li
                      key={href}
                      className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group"
                    >
                      <a
                        className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className={`fa-brands ${icon} group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow`}
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
              <div className="mb-10">
                <h3 className="!text-white mb-7.5 relative xl:text-28 text-2xl">Explore</h3>
                <ul>
                  {['About us', "FAQ's", 'Services', 'Team', 'News & Articles'].map((text) => (
                    <li key={text} className="block w-full py-0.5 overflow-hidden">
                      <a
                        className="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow"
                        href="#"
                        data-disabled="spa"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
              <div className="mb-10">
                <h3 className="!text-white mb-7.5 relative xl:text-28 text-2xl">Destinations</h3>
                <ul>
                  {['Tokyo', 'France', 'Dubai', 'Kenya', 'Vietnam'].map((text) => (
                    <li key={text} className="block w-full py-0.5 overflow-hidden">
                      <a
                        className="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow"
                        href="#"
                        data-disabled="spa"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
              <div className="mb-10">
                <h3 className="!text-white mb-7.5 relative xl:text-28 text-2xl">Legal</h3>
                <ul>
                  {['Terms & Condition', 'Privacy Policy', 'Contact', 'Careers', 'Help'].map((text) => (
                    <li key={text} className="block w-full py-0.5 overflow-hidden">
                      <a
                        className="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow"
                        href="#"
                        data-disabled="spa"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 sm:col-span-6 col-span-12 sm:px-3.75">
              <div className="mb-10">
                <ul>
                  <li className="mb-2.5 relative flex items-center">
                    <div className="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
                      <i className="fa-solid fa-phone text-xl text-white"></i>
                    </div>
                    <a href="tel:+919503953737">
                      <span className="xl:text-3xl text-2xl text-citrusyellow font-normal font-display">
                        +91 9503953737
                      </span>
                    </a>
                  </li>
                  <li className="mb-2.5 relative flex items-center">
                    <div className="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
                      <i className="fa-solid fa-envelope text-xl text-white"></i>
                    </div>
                    <a
                      className="black text-paleaqua font-semibold xl:text-lg text-sm font-base"
                      href="mailto:kabeerrtravelzhub@gmail.com"
                    >
                      kabeerrtravelzhub@gmail.com
                    </a>
                  </li>
                  <li className="relative flex items-center">
                    <div className="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
                      <i className="fa-solid fa-house text-xl text-white"></i>
                    </div>
                    <span className="black text-paleaqua font-semibold xl:text-lg text-sm font-base">
                      405, HN More Complex, NDA Road, Shivane, Pune - 411023
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:py-10 py-1.25 xl:flex items-center">
          <h3 className="whitespace-nowrap mr-11.5 !text-white relative text-28 max-xl:mb-7.5">Follow Instagram</h3>
          <ul className="flex xl:gap-5 gap-y-2.5 gap-x-[2%] flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <li key={n} className="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
                <a
                  href="https://www.instagram.com/"
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group"
                >
                  <img
                    src={`assets/images/insta-gallery/pic${n}.jpg`}
                    alt={`pic${n}`}
                    className="group-hover:opacity-80 group-hover:[filter:blur(3px)]"
                    width="100"
                    height="100"
                    loading="lazy"
                  />
                  <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                    <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-10 text-white relative z-1 font-normal after:absolute after:bg-primary after:max-w-135 after:h-px after:left-1/2 after:top-0 after:-translate-x-1/2">
          <div className="container">
            <p className="copyrights-text text-center text-sm font-semibold">
              © <span className="current-year">{new Date().getFullYear()}</span>{' '}
              <span className="inline-block text-citrusyellow uppercase text-center text-sm font-semibold">
                Kabeerr Travelz Hub
              </span>{' '}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

