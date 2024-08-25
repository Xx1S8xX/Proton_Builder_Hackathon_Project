import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageCard from "@/components/LanguageCard";

function Page() {
	const languages = [
		{
			id: "python-option",
			label: "Python",
			description:
				"A high-level, interpreted, general-purpose programming language, used mainly for data analysis, and data visualization.",
			imageSrc: "/images/python.png",
			stats: [1, 2, 4, 10],
		},
		{
			id: "javascript-option",
			label: "JavaScript",
			description:
				"A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
			imageSrc: "/images/javascript.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "java-option",
			label: "Java",
			description:
				"A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
			imageSrc: "/images/java.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "csharp-option",
			label: "C#",
			description:
				"A modern, object-oriented programming language developed by Microsoft.",
			imageSrc: "/images/csharp.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "ruby-option",
			label: "Ruby",
			description:
				"A dynamic, open source programming language with a focus on simplicity and productivity.",
			imageSrc: "/images/ruby.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "c-option",
			label: "C",
			description:
				"A general-purpose, procedural computer programming language supporting structured programming.",
			imageSrc: "/images/c.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "cpp-option",
			label: "C++",
			description:
				"A general-purpose programming language created as an extension of the C programming language.",
			imageSrc: "/images/cpp.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "go-option",
			label: "Go",
			description:
				"An open source programming language that makes it easy to build simple, reliable, and efficient software.",
			imageSrc: "/images/go.png",
			stats: [9, 9, 9, 9],
		},
		{
			id: "rust-option",
			label: "Rust",
			description:
				"A multi-paradigm programming language designed for performance and safety, especially safe concurrency.",
			imageSrc: "/images/rust.png",
			stats: [9, 9, 9, 9],
		},
	];

	return (
		<div>
			<div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
				<ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10">
					{languages.map((lang) => (
						<LanguageCard
							key={lang.id}
							id={lang.id}
							label={lang.label}
							description={lang.description}
							imageSrc={lang.imageSrc}
							stats={lang.stats}
						/>
					))}
				</ul>
			</div>
			<div className="flex px-10 pt-8 justify-center">
				<button className="px-8 py-2 bg-green-500 rounded-md uppercase">
					Continue
				</button>
			</div>
		</div>
	);
}

export default Page;
