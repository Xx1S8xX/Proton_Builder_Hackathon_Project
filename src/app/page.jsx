"use client";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
	const router = useRouter();

	return (
		<div>
			<section
				id="home"
				className="welcome-hero h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
			>
				<div className="container text-center text-white">
					<div className="welcome-hero-txt">
						<h2 className="text-4xl sm:text-5xl font-bold mb-4">
							Welcome to Proton Manager
						</h2>
						<p className="text-lg sm:text-xl">
							Need Help? That's what we're here for. Let us guide
							you through finding the easiest way to start your
							project!
						</p>
					</div>
				</div>
			</section>

			<section id="works" className="works py-16 bg-white">
				<div className="container mx-auto text-center">
					<div className="section-header mb-12">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">
							How it Works
						</h2>
						<p className="text-gray-600">
							Learn more about how our website works
						</p>
					</div>
					<div className="works-content flex flex-wrap justify-center">
						<div className="single-how-works p-6 m-4 bg-gray-100 rounded-lg shadow-md max-w-xs">
							<div className="single-how-works-icon text-blue-500 text-5xl mb-4">
								<span className="material-symbols-outlined">
									lightbulb
								</span>
							</div>
							<h2 className="text-xl font-semibold mb-2">
								1/ Tell us what type of project you want to do
							</h2>
							<p className="text-gray-600">
								Choose one of the options given to you (Website,
								Mobile App, etc...)
							</p>
						</div>

						<div className="single-how-works p-6 m-4 bg-gray-100 rounded-lg shadow-md max-w-xs">
							<div className="single-how-works-icon text-green-500 text-5xl mb-4">
								<span className="material-symbols-outlined">
									network_check
								</span>
							</div>
							<h2 className="text-xl font-semibold mb-2">
								2/ Tell us what are your preferred languages
							</h2>
							<p className="text-gray-600">
								Java, JavaScript, C, C++, Python, and many more
							</p>
						</div>

						<div className="single-how-works p-6 m-4 bg-gray-100 rounded-lg shadow-md max-w-xs">
							<div className="single-how-works-icon text-red-500 text-5xl mb-4">
								<span className="material-symbols-outlined">
									location_on
								</span>
							</div>
							<h2 className="text-xl font-semibold mb-2">
								3/ Leave the rest to us
							</h2>
							<p className="text-gray-600">
								We will do our best to help you and give you the
								initial push to start your project
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="list-topics" className="list-topics py-16 bg-gray-50">
				<div className="container mx-auto text-center">
					<div className="list-topics-content">
						<h2 className="text-3xl font-bold text-gray-800 mb-12">
							Do you know what are the 3 most used languages
							today?
						</h2>
						<ul className="flex flex-wrap justify-center gap-8 mx-40">
							<li className="single-list-topics-content bg-white p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
								<div className="single-list-topics-icon text-yellow-500 text-5xl mb-4">
									<span className="material-symbols-outlined">
										restaurant
									</span>
								</div>
								<h2 className="text-xl font-semibold mb-2">
									1/ JavaScript
								</h2>
								<p className="text-gray-600">
									Mobile and Desktop App Development, Game
									Development, Server-Side Programming
								</p>
							</li>
							<li className="single-list-topics-content bg-white p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
								<div className="single-list-topics-icon text-green-500 text-5xl mb-4">
									<span className="material-symbols-outlined">
										travel_explore
									</span>
								</div>
								<h2 className="text-xl font-semibold mb-2">
									2/ Python
								</h2>
								<p className="text-gray-600">
									Data Science, Machine Learning, Web
									Development, Automation
								</p>
							</li>
							<li className="single-list-topics-content bg-white p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
								<div className="single-list-topics-icon text-blue-500 text-5xl mb-4">
									<span className="material-symbols-outlined">
										apartment
									</span>
								</div>
								<h2 className="text-xl font-semibold mb-2">
									3/ Java
								</h2>
								<p className="text-gray-600">
									Enterprise-Level Applications, Android
									Apps, Games
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="blog" className="blog py-16 bg-white">
				<div className="container mx-auto text-center">
					<div className="section-header mb-12">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">
							Why Choose Us?
						</h2>
						<p className="text-gray-600">
							Why would you choose us over anyone else?
						</p>
					</div>
					<div className="blog-content flex flex-wrap justify-center">
						<div className="single-blog-item p-6 m-4 bg-gray-100 rounded-lg shadow-md max-w-xs">
							<h2 className="text-xl font-semibold mb-2">
								Efficient
							</h2>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur de
								adipisicing elit, sed do eiusmod tempore
								incididunt ut labore et dolore magna.
							</p>
						</div>

						<div className="single-blog-item p-6 m-4 bg-gray-100 rounded-lg shadow-md max-w-xs">
							<h2 className="text-xl font-semibold mb-2">Quick</h2>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur de
								adipisicing elit, sed do eiusmod tempore
								incididunt ut labore et dolore magna.
							</p>
						</div>

						<div className="single-blog-item p-6 m-4 bg-gray-100 rounded-lg shadow-md max-w-xs">
							<h2 className="text-xl font-semibold mb-2">
								Meant for you
							</h2>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur de
								adipisicing elit, sed do eiusmod tempore
								incididunt ut labore et dolore magna.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
