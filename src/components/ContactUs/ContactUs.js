import React from 'react';
import { useLottie } from "lottie-react";
import contactAnimation from "../../assets/contact.json";

const ContactUs = () => {
    const options = {
        animationData: contactAnimation,
        loop: true
      };
    
    const { View } = useLottie(options);

    return (
        <div class="bg-black pt-28 pb-20 lg:pt-28">
        <div data-aos="fade-up" data-aos-duration="1000" className=''>
            <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-200">
	<div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-3xl font-bold leading-tight lg:text-4xl animate-pulse">Let's talk! ☎️</h2>
			<div className="dark:text-gray-400">Any Query? Please contact.</div>
		</div>
		<span className=''>{View}</span>
	</div>
	<form data-aos="fade-left" data-aos-duration="1000" className="space-y-6 ng-untouched ng-pristine mt-20">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded border" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded border" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded border"></textarea>
		</div>
		<button className="w-full p-3 text-sm font-semibold tracking-wide uppercase rounded bg-rose-500 text-white">Send Message</button>
	</form>
</div>
        </div>
    </div>
    );
};

export default ContactUs;