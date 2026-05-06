import { useEffect, useState } from 'react';
import templateHtml from '../templates/templateHtml';

const scriptSources = [
  '/assets/js/jquery-3.7.1.min.js',
  '/assets/vendor/gsap/gsap.min.js',
  '/assets/vendor/gsap/ScrollSmoother.js',
  '/assets/vendor/gsap/ScrollTrigger.min.js',
  '/assets/vendor/swiper/swiper-bundle.min.js',
  '/assets/vendor/masonry/masonry-4.2.2.js',
  '/assets/vendor/masonry/isotope.pkgd.min.js',
  '/assets/vendor/flatpickr/js/flatpickr.js',
  '/assets/vendor/magnific-popup/magnific-popup.js',
  '/assets/vendor/nouislider/nouislider.min.js',
  '/assets/vendor/group-slide/group-loop.js',
  '/assets/vendor/xmenu/xmenu.js',
  '/assets/vendor/lightgallery/dist/lightgallery.min.js',
  '/assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js',
  '/assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js',
  '/assets/js/imagesloaded.pkgd.min.js',
  '/assets/js/theia-sticky-sidebar.js',
  '/assets/js/owl.carousel.min.js',
  '/assets/js/isotope.pkgd.min.js',
  '/assets/js/dz.carousel.js',
  '/assets/js/lc_lightbox.lite.js',
  '/assets/js/dz.ajax.js',
  '/assets/js/animation.js',
  '/assets/js/custom.js',
];

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const tag = document.createElement('script');
    tag.src = src;
    tag.async = false;
    tag.onload = () => resolve();
    tag.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(tag);
  });

const initMobileMenu = () => {
  document.querySelectorAll('header').forEach((header) => {
    const toggler = header.querySelector('.xmenu-toggler');
    const headerNav = header.querySelector('.header-nav');
    const menuClose = header.querySelector('.menu-close');
    if (!toggler || !headerNav || toggler.dataset.mobileMenuBound === 'true') {
      return;
    }

    toggler.dataset.mobileMenuBound = 'true';

    const closeMenu = () => {
      headerNav.classList.remove('show');
      toggler.classList.remove('open');
      toggler.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    };

    const toggleMenu = () => {
      const isOpen = headerNav.classList.toggle('show');
      toggler.classList.toggle('open', isOpen);
      toggler.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('overflow-hidden', isOpen);
    };

    toggler?.addEventListener('click', toggleMenu);
    menuClose?.addEventListener('click', closeMenu);
    headerNav.querySelectorAll('a').forEach((link) => {
      link?.addEventListener('click', closeMenu);
    });
  });
};

const initPopularDestinationsSlider = () => {
  const slider = document.querySelector('.reviewtwo-slider');
  if (!slider || !window.Swiper || slider.swiper) return;

  new window.Swiper(slider, {
    speed: 900,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: slider.querySelector('.swiper-button-next'),
      prevEl: slider.querySelector('.swiper-button-prev'),
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
};

export default function Home() {
  const [markup, setMarkup] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const doc = new DOMParser().parseFromString(templateHtml, 'text/html');
      const body = doc.body.cloneNode(true);

      const newsSection = body.querySelector(
        '[class*="bg-paleaqua"][class*="pb-40"]',
      );
      if (newsSection) {
        let node = newsSection.nextSibling;
        while (node) {
          const next = node.nextSibling;
          node.remove();
          node = next;
        }
      }

      const loader = body.querySelector('.loading-area');
      if (loader) loader.remove();

      document.body.id = doc.body.id || '';
      document.body.className = doc.body.className || '';

      body.querySelectorAll('a[href$=".html"]').forEach((a) => {
        const href = a.getAttribute('href');
        if (href === 'about-1.html') a.href = '/about';
        else if (href === 'destination-detail.html') a.href = '/destinations';
        else if (href === 'tour-detail.html') a.href = '/tours';
        else if (href === 'blog-detail.html') a.href = '/blogs';
        else if (href === 'contact.html') a.href = '/contact';
        else if (href === 'services.html') a.href = '/pages';
        else {
          a.setAttribute('data-disabled', 'spa');
          a.href = '#';
        }
        a.removeAttribute('data-disabled');
      });

      body.querySelectorAll('a[href="#"]').forEach((a) => {
        const span = a.querySelector('span');
        if (span) {
          const text = span.textContent.toLowerCase();
          if (text === 'home') a.href = '/';
          else if (text === 'about') a.href = '/about';
          else if (text === 'pages') a.href = '/pages';
          else if (text === 'destinations') a.href = '/destinations';
          else if (text === 'tours') a.href = '/tours';
          else if (text === 'blogs') a.href = '/blogs';
          else if (text === 'contact') a.href = '/contact';
          a.removeAttribute('data-disabled');
        }
      });

      setMarkup(body.innerHTML);
    } catch (err) {
      console.error(err);
      setError('Template failed to load');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!markup) return;
    let cancelled = false;

    (async () => {
      for (const src of scriptSources) {
        if (cancelled) break;
        try {
          await loadScript(src);
        } catch (err) {
          console.warn(err);
          setError(`Missing asset: ${src}`);
          break;
        }
      }

      const loader = document.querySelector('.loading-area');
      if (loader) loader.remove();

      initMobileMenu();
      initPopularDestinationsSlider();

      if (
        !cancelled &&
        window.Travlla &&
        typeof window.Travlla.init === 'function'
      ) {
        window.Travlla.init();
        initMobileMenu();
        initPopularDestinationsSlider();
      }

      document
        .querySelectorAll('a[data-disabled="spa"]')
        .forEach((a) =>
          a?.addEventListener('click', (e) => e.preventDefault()),
        );
    })();

    return () => {
      cancelled = true;
    };
  }, [markup]);

  const openWhatsApp = () => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message =
      import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hi! I want to know more.';
    if (!number) {
      alert(
        'WhatsApp number missing. Add VITE_WHATSAPP_NUMBER to your .env file.',
      );
      return;
    }
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className='relative'>
      {loading && (
        <div className='flex items-center justify-center min-h-screen text-white bg-black'>
          Loading…
        </div>
      )}
      {error && !loading && (
        <div className='flex items-center justify-center min-h-screen text-white bg-red-700'>
          {error}
        </div>
      )}
      {!loading && !error && (
        <div
          className='template-body'
          dangerouslySetInnerHTML={{ __html: markup }}
        />
      )}

      <button
        type='button'
        onClick={openWhatsApp}
        className='fixed bottom-6 right-6 z-[1000] bg-[#25D366] text-white shadow-2xl rounded-full h-14 px-5 flex items-center gap-3 hover:scale-105 transition-all duration-300'
        aria-label='Chat on WhatsApp'
      >
        <span className='text-xl'>?</span>
        <span className='font-semibold'>Chat on WhatsApp</span>
      </button>
    </div>
  );
}
