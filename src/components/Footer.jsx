import React from 'react';

const Footer = () => {
	return (
		<div id='test__id'>
			<footer id="contact" className="bg-gray-800 text-white py-8">
				<div className="container mx-auto text-center">
					<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
					<p className="mb-2">Proton Builder</p>
					<p className="mb-2">Email: support@protonbuilder.com</p>
					<p className="mb-2">Phone: +961 78 866 645</p>
					<p className="mb-2">Address: BDD 1499, Beirut, Lebanon</p>
					<div className="mt-4">
						<a href="#" className="text-blue-400 mx-2 hover:text-blue-300">
							Facebook
						</a>
						<a href="#" className="text-blue-400 mx-2 hover:text-blue-300">
							Twitter
						</a>
						<a href="#" className="text-blue-400 mx-2 hover:text-blue-300">
							LinkedIn
						</a>
					</div>
				</div>
			</footer>
		</div>

	);
};

export default Footer;