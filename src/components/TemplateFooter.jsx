import { useEffect } from 'react';

const footerHtml = `
<!-- FOOTER START -->
<footer class="pt-20 bg-primary bg-cover bg-[url(../images/background/ftr-dark-bg.png)]">
	<div class="-mt-40">
		<div class="container bg-citrusyellow rounded-3xl md:flex items-center justify-between !py-6.25 lg:!px-17.5 sm:!px-10.5 !px-5.5 max-w-324">
			<div class="pr-5 max-lg:w-1/2 max-md:w-full">
			<div class="text-primary font-display lg:text-80 sm:text-46 text-28 leading-[0.75] sm:text-shadow-[2px_3px_0px_rgba(255,255,255,0.72)] pb-5"><span class="text-white inline-block">Subscribe</span> Now!</div>
				<div class="text-primary text-xl font-medium font-title max-md:mb-5">
					Sign up to searing weekly newsletter to get the latest updates.
				</div>
			</div>
			<div class="p-1.5 bg-paleaqua rounded-full max-w-107 flex-1 h-20">
				<form class="dzSubscribe" method="post" action="https://travlla.dexignzone.com/tailwind/demo/assets/script/mailchamp.php">
					<div class="dzSubscribeMsg"></div>
					<div class="flex relative">
						<label for="newsletter-email" class="sr-only">Email address</label>
						<input name="news-letter" required="required" type="email"  id="newsletter-email" autocomplete="email" class="form-control !h-17 !border-0 outline-none !py-2.5 !pl-5 !pr-17.5 rounded-full !text-2xs !leading-5 bg-white focus:text-[#212529] focus:bg-transparent focus:shadow-[0_1px_3px_0_rgba(0,0,0,0.6)] placeholder:text-primary" placeholder="Email address...">
						<button type="submit" name="submit" value="submit" class="text-28 text-white rounded-full size-15 bg-primary absolute top-1.25 right-1.25 duration-500 cursor-pointer" aria-label="Subscribe to newsletter"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- FOOTER BLOCKES START -->
	<div class="container">
		<div class="sm:pt-20 pt-10 text-white/06 border-b border-primary">
			<div class="grid grid-cols-12">
				<div class="lg:col-span-3 col-span-12 sm:px-3.75">
					<div class="mb-10">
						<div class="mb-10 text-center block max-w-48.25 after:table after:clear-both">
							<a href="/"><img src="/assets/logo.png" alt="logo" width="193" height="81" loading="lazy"></a>
						</div>
						<p class="sm:pr-12.5 mb-4 text-base text-white/50">405, HN More Complex, NDA Road, Shivane, Pune - 411023<br/>Email: kabeerrtravelzhub@gmail.com<br/>Phone: +91 9503953737</p>
						<ul class="mt-5">
							<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
								<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com/" target="_blank">
									<i class="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
								</a>
							</li>
							<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
								<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com/" target="_blank">
									<i class="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
								</a>
							</li>
							<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
								<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com/" target="_blank">
									<i class="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
								</a>
							</li>
							<li class="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
								<a class="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
									<i class="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
					<div class="mb-10">
						<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Explore</h3>
						<ul>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/about">About us</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages#faq">FAQ's</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Services</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Team</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/blogs">News & Articles</a></li>
						</ul>
					</div>
				</div>
				<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
					<div class="mb-10">
						<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Destinations</h3>
						<ul>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Tokyo</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">France</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Dubai</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Kenya</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/destinations">Vietnam</a></li>
						</ul>
					</div>
				</div>
				<div class="lg:col-span-2 col-span-6 mb-5 sm:px-3.75">
					<div class="mb-10">
						<h3 class="!text-white mb-7.5 relative xl:text-28 text-2xl">Legal</h3>
						<ul>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Terms & Condition</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Privacy Policy</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/contact">Contact</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Careers</a></li>
							<li class="block w-full py-0.5 overflow-hidden"><a class="pb-1.5 block duration-500 text-base text-paleaqua font-semibold hover:text-citrusyellow" href="/pages">Help</a></li>
						</ul>
					</div>
				</div>
				<div class="lg:col-span-3 sm:col-span-6 col-span-12 sm:px-3.75">
					<div class="mb-10">
						<ul>
							<li class="mb-2.5 relative flex items-center">
								<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
									<i class="fa-solid fa-phone text-xl text-white"></i>
								</div>
								<a href="tel:+919503953737">
									<span class="xl:text-3xl text-2xl text-citrusyellow font-normal font-display">+91 9503953737</span>
								</a>
							</li>
							<li class="mb-2.5 relative flex items-center">
								<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
									<i class="fa-solid fa-envelope text-xl text-white"></i>
								</div>
								<a class="black text-paleaqua font-semibold xl:text-lg text-sm font-base" href="mailto:kabeerrtravelzhub@gmail.com">kabeerrtravelzhub@gmail.com</a>
							</li>
							<li class="relative flex items-center">
								<div class="xl:size-14 size-12 xl:min-w-14 min-w-12 rounded-full mr-3.5 bg-white/40 flex items-center justify-center">
									<i class="fa-solid fa-house text-xl text-white"></i>
								</div>
								<span class="black text-paleaqua font-semibold xl:text-lg text-sm font-base">405, HN More Complex, NDA Road, Shivane, Pune - 411023</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="xl:py-10 py-1.25 xl:flex items-center">
			<h3 class="whitespace-nowrap mr-11.5 !text-white relative text-28 max-xl:mb-7.5">Follow Instagram</h3>
			<ul class="flex xl:gap-5 gap-y-2.5 gap-x-[2%] flex-wrap">
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic1.jpg" alt="pic1" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic2.jpg" alt="pic2" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic3.jpg" alt="pic3" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic4.jpg" alt="pic4" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic5.jpg" alt="pic5" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic6.jpg" alt="pic6" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic7.jpg" alt="pic7" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic8.jpg" alt="pic8" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
				<li class="lg:w-[9.43%] sm:w-[18.4%] w-[32%]">
					<a href="https://www.instagram.com/" class="relative rounded-2xl overflow-hidden flex items-center justify-center duration-500 bg-primary group">
						<img src="assets/images/insta-gallery/pic9.jpg" alt="pic9" class="group-hover:opacity-80 group-hover:[filter:blur(3px)]" width="100" height="100" loading="lazy">
						<span class="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
							<i class="fa-brands fa-instagram absolute left-1/2 top-1/2 translate-1/2 text-white opacity-0 duration-500 group-hover:scale-[1.1] group-hover:-translate-1/2 group-hover:opacity-100"></i>
						</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="py-10 text-white relative z-1 font-normal after:absolute after:bg-primary after:max-w-135 after:h-px after:left-1/2 after:top-0 after:-translate-x-1/2">
			<div class="container">
				<p class="copyrights-text text-center text-sm font-semibold"> <span class="current-year">2026</span> <span class="inline-block text-citrusyellow uppercase text-center text-sm font-semibold">Kabeerr Travelz Hub</span> All Rights Reserved.</p>
			</div>
		</div>
	</div>
</footer>
<!-- FOOTER END -->
`;

export default function TemplateFooter() {
  useEffect(() => {
    // Initialize any scripts if needed
    if (window.Travlla && typeof window.Travlla.initFooter === 'function') {
      window.Travlla.initFooter();
    }
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
