import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="sticky top-0 bg-white w-full px-6 py-4">
			<ul className="flex w-full items-center justify-between px-4 py-3 uppercase">
				<li className="font-bold text-xl capitalize">Proton<span className='text-red-400 capitalize'>Manager</span></li>
				<div className="flex gap-3">
					<li>
						<Link href="/" passHref>
							<div className="uppercase px-3 py-1 text-sm font-semibold cursor-pointer">
								home
							</div>
						</Link>
					</li>
					<li>
						<Link href="/languages" passHref>
							<div className="uppercase px-3 py-1 text-sm font-semibold cursor-pointer">
								build
							</div>
						</Link>
					</li>
					<li>
						<Link href="/contact" passHref>
							<div className="uppercase px-3 py-1 text-sm font-semibold cursor-pointer">
								contact
							</div>
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
