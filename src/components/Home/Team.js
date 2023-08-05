import React from 'react';

const Team = () => {
    return (
        <section className="  dark:text-gray-200">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
    <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-2xl md:text-3xl font-semibold leading-none text-center text-primary">Our <span className='text-red-500'>Team</span></h1>
		
		<div data-aos="fade-up" data-aos-duration="1000" className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover rounded-full border-2 p-2" src="https://source.unsplash.com/100x100/?portrait?0" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover rounded-full border-2 p-2" src="https://source.unsplash.com/100x100/?portrait?1" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover rounded-full border-2 p-2" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover rounded-full border-2 p-2" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover rounded-full border-2 p-2" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-28 h-28 mb-4 bg-center bg-cover rounded-full border-2 p-2" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">Visual Designer</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Team;