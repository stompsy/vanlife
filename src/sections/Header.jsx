const Header = () => {
	return (
		<header>
			<nav className='flex justify-between items-center p-4 gap-4 text-lg text-black bg-orange-50 tracking-tight rounded-t-xl'>
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
		</header>
	);
};

export default Header;
