const Navbar = () => {
	return (
		<nav className="bg-slate-900 rounded-xl mx-6 sm:mx-10 mt-6 border-2 border-[rgba(255,255,255,0.2)]">
			<ul className="flex w-full items-center justify-between px-4 py-3 uppercase">
				<li>Proton Builder</li>
				<div className="flex gap-3 text-sm">
					<li>
						<button className="uppercase px-3 py-1 bg-slate-700 rounded-md">
							home
						</button>
					</li>
					<li>
						<button className="uppercase px-3 py-1 bg-slate-700 rounded-md">
							build
						</button>
					</li>
					<li>
						<button className="uppercase px-3 py-1 bg-slate-700 rounded-md">
							contact
						</button>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
