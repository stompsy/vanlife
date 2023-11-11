import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import './index.css';

export const App = () => {
	return (
		<BrowserRouter>
			<header>
				<Link to='/'>#VANLIFE</Link>
				<nav>
					<Link to='/about' className='self-baseline'>
						About
					</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
