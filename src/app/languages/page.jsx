'use client';
import { useState } from 'react';
import Link from 'next/link';
import LanguageCard from '@/components/LanguageCard';

function Page() {
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const languages = [
		{
			id: "python-option",
			label: "Python",
			language:"Python",
			description:
			  "A high-level, interpreted, general-purpose programming language, used mainly for data analysis, and data visualization.",
			imageSrc: "/images/python.png",
			stats: [8, 6, 9, 8], // Speed: 8, Complexity: 6, Popularity: 9, Functionalities: 8
		  },
		  {
			id: "javascript-option",
			label: "JavaScript",
			language:"JavaScript",
			description:
			  "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
			imageSrc: "/images/javascript.png",
			stats: [9, 7, 9, 9], // Speed: 9, Complexity: 7, Popularity: 9, Functionalities: 9
		  },
		  {
			id: "typescript-option",
			label: "TypeScript",
			language:"JavaScript",
			description:
			  "A statically typed, multi-paradigm programming language that is a superset of JavaScript, designed to help developers catch errors early and improve code maintainability.",
			imageSrc: "/images/typescript.png",
			stats: [8, 8, 8, 9], // Speed: 8, Complexity: 8, Popularity: 8, Functionalities: 9
		  },
		  {
			id: "java-option",
			label: "Java",
			language:"Java",
			description:
			  "A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
			imageSrc: "/images/java.png",
			stats: [7, 8, 8, 8], // Speed: 7, Complexity: 8, Popularity: 8, Functionalities: 8
		  },
		  {
			id: "csharp-option",
			label: "C#",
			language:"C#",
			description:
			  "A modern, object-oriented programming language developed by Microsoft.",
			imageSrc: "/images/csharp.png",
			stats: [8, 8, 7, 8], // Speed: 8, Complexity: 8, Popularity: 7, Functionalities: 8
		  },
		  {
			id: "ruby-option",
			label: "Ruby",
			language:"Ruby",
			description:
			  "A dynamic, open source programming language with a focus on simplicity and productivity.",
			imageSrc: "/images/ruby.png",
			stats: [7, 6, 6, 7], // Speed: 7, Complexity: 6, Popularity: 6, Functionalities: 7
		  },
		  {
			id: "c-option",
			label: "C",
			language:"C",
			description:
			  "A general-purpose, procedural computer programming language supporting structured programming.",
			imageSrc: "/images/c.png",
			stats: [9, 5, 5, 6], // Speed: 9, Complexity: 5, Popularity: 5, Functionalities: 6
		  },
		  {
			id: "cpp-option",
			label: "C++",
			language:"C++",
			description:
			  "A general-purpose programming language created as an extension of the C programming language.",
			imageSrc: "/images/cpp.png",
			stats: [9, 8, 7, 8], // Speed: 9, Complexity: 8, Popularity: 7, Functionalities: 8
		  },
		  {
			id: "go-option",
			label: "Go",
			language:"Go",
			description:
			  "An open source programming language that makes it easy to build simple, reliable, and efficient software.",
			imageSrc: "/images/go.png",
			stats: [8, 6, 6, 7], // Speed: 8, Complexity: 6, Popularity: 6, Functionalities: 7
		  },
		  {
			id: "rust-option",
			label: "Rust",
			language:"Rust",
			description:
			  "A multi-paradigm programming language designed for performance and safety, especially safe concurrency.",
			imageSrc: "/images/rust.png",
			stats: [9, 8, 5, 7], // Speed: 9, Complexity: 8, Popularity: 5, Functionalities: 7
		  },
	];
	const handleLanguageSelect = (language) => {
		console.log("hello");
		if (selectedLanguages.includes(language)) {
		  setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
		} else {
		  setSelectedLanguages([...selectedLanguages, language]);
		}
		console.log("hello");
	  };

	return (
			<div>
				<div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
					<ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10">
						{languages.map((lang) => (
							<LanguageCard
								key={lang.id}
								id={lang.id}
								label={lang.label}
								language={lang.language}
								description={lang.description}
								imageSrc={lang.imageSrc}
								stats={lang.stats}
								onSelect={() => handleLanguageSelect(lang.label)}
								selected={selectedLanguages.includes(lang.label)}
							/>
						))}
					</ul>
				</div>
				<div className="flex px-10 pt-8 justify-center">
					<Link href="/frameworks">
						<button className="px-8 py-2 bg-green-500 rounded-md uppercase">
							Continue
						</button>
					</Link>
				</div>
			</div>
	);
}

export default Page;
