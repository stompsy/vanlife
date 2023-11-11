import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

export const App = () => {
	return (
		<BrowserRouter>
			<nav className='flex justify-between items-center p-4 gap-4 text-lg text-black bg-orange-50 tracking-tighter rounded-t-xl'>
				<div className='text-black text-2xl font-black no-underline'>
					#VANLIFE
				</div>
				<div className='flex gap-4'>
					<Link to='/' className='self-baseline'>
						Home
					</Link>
					<Link to='/about' className='self-baseline'>
						About
					</Link>
				</div>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export const Home = () => {
	return (
		<div className='flex flex-col text-white bg-black rounded-b-xl'>
			<div className="h-full bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
				<div className='py-12 px-8 opacity-80 object-contain bg-gradient-to-b from-black to-neutral-800'>
					<h1 className='text-4xl text-white font-sans font-bold'>
						You got the travel plans, we got the travel vans.
					</h1>
					<p className='mt-6 font-medium'>
						Add adventure to your life by joining the #vanlife movement. Rent
						the perfect van to make your perfect road trip.
					</p>
					<button className='w-full mt-12 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600'>
						Find your van!
					</button>
				</div>
			</div>
			<footer className='rounded-b-xl'>
				<div className='flex justify-center items-center py-6 h-16 text-slate-400 bg-neutral-800 tracking-tight rounded-b-xl'>
					<h1>&copy; 2023 #VANLIFE</h1>
				</div>
			</footer>
		</div>
	);
};

export const About = () => {
	return (
		<div className='flex flex-col text-white bg-black rounded-b-xl tracking-tighter'>
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
					<button className='mt-6 px-6 py-2 bg-neutral-800 text-white rounded-lg text-base hover:bg-orange-600'>
						Explore our vans
					</button>
				</div>
			</div>
			<footer className='rounded-b-xl'>
				<div className='flex justify-center items-center py-6 h-16 text-slate-400 bg-neutral-800 tracking-tight rounded-b-xl'>
					<h1>&copy; 2023 #VANLIFE</h1>
				</div>
			</footer>
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
