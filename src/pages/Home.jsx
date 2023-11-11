import { Link } from 'react-router-dom';

export default Home = () => {
	return (
		<div className='flex flex-col text-white bg-black rounded-b'>
			<div className="h-full object-cover bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
				<div className='py-12 px-8 opacity-80 bg-gradient-to-b from-black to-neutral-800'>
					<h1 className='z-10 text-4xl text-white font-sans font-bold'>
						You got the travel plans, we got the travel vans.
					</h1>
					<p className='z-10 mt-6 font-medium'>
						Add adventure to your life by joining the #vanlife movement. Rent
						the perfect van to make your perfect road trip.
					</p>
					<button className='z-10 w-full mt-12 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600'>
						<Link to='vans'>Find your van!</Link>
					</button>
				</div>
			</div>
			<footer className='rounded-b'>
				<div className='flex justify-center items-center py-6 h-16 text-slate-400 bg-neutral-800 tracking-tight rounded-b'>
					<h1>&copy; 2023 #VANLIFE</h1>
				</div>
			</footer>
		</div>
	);
};
