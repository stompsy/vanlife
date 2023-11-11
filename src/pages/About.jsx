import { Link } from 'react-router-dom';

export const About = () => {
	return (
		<div className='flex flex-col text-white bg-black rounded-b tracking-tighter'>
			<div className='h-64 text-black bg-orange-50'>
				<img
					src='https://images.unsplash.com/photo-1594495894542-a46cc73e081a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Image of a travel van'
					className='object-cover w-full h-full'
				/>
			</div>
			<div className='flex flex-col py-8 px-4 bg-orange-50 text-black'>
				<h1 className='text-4xl font-sans font-bold'>
					Don't squeeze in a sedan when you could relax in a van.
				</h1>
				<p className='pt-6 text-lg font-normal'>
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch.
				</p>
				<p className='mt-2 text-lg'>(Hitch costs extra 🤣)</p>
				<div className='mt-8 mb-2 p-6 text-2xl font-bold tracking-tighter bg-orange-300 rounded-md'>
					<h1>Your destination is waiting.</h1>
					<h1>Your van is ready.</h1>
					<Link className='mt-6 px-6 py-2 bg-neutral-800 text-white rounded-lg text-base hover:bg-orange-600'>
						Explore our vans
					</Link>
				</div>
			</div>
			<footer className='rounded-b-xl'>
				<div className='flex justify-center items-center py-6 h-16 text-slate-400 bg-neutral-800 tracking-tight rounded-b'>
					<h1>&copy; 2023 #VANLIFE</h1>
				</div>
			</footer>
		</div>
	);
};
