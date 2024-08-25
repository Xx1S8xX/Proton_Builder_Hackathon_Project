"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation';
import FrameworkCard from "@/components/LanguageCard";
import Link from "next/link";

function Page() {
    const [selectedLanguages, setSelectedLanguages] = useState([]); // initialize an empty array
    const frameworks = [
    // Python
    {
        id: "django-option",
        label: "Django",
        language: "Python",
        description:
        "A high-level, full-featured web framework for building complex web applications quickly and efficiently.",
        imageSrc: "/images/django.png",
        stats: [8, 7, 9, 9], // Speed: 8, Complexity: 7, Popularity: 9, Functionalities: 9
    },
    {
        id: "flask-option",
        label: "Flask",
        language: "Python",
        description:
        "A lightweight, flexible, and modular web framework for building web applications with a small codebase.",
        imageSrc: "/images/flask.png",
        stats: [9, 5, 8, 7], // Speed: 9, Complexity: 5, Popularity: 8, Functionalities: 7
    },
    {
        id: "pyqt-option",
        label: "PyQt",
        language: "Python",
        description:
        "A set of Python bindings for the Qt application framework, for building desktop applications.",
        imageSrc: "/images/pyqt.png",
        stats: [8, 7, 7, 8], // Speed: 8, Complexity: 7, Popularity: 7, Functionalities: 8
    },
    {
        id: "kivy-option",
        label: "Kivy",
        language: "Python",
        description:
        "An open-source Python library for rapid development of applications that make use of user-friendly multi-touch, gestures, scalable, and high-performance graphics.",
        imageSrc: "/images/kivy.png",
        stats: [8, 6, 6, 7], // Speed: 8, Complexity: 6, Popularity: 6, Functionalities: 7
    },


    // Java
    {
        id: "spring-option",
        label: "Spring",
        language: "Java",
        description:
        "A popular Java-based framework for building enterprise-level applications, focusing on simplicity and flexibility.",
        imageSrc: "/images/spring.png",
        stats: [7, 8, 9, 9], // Speed: 7, Complexity: 8, Popularity: 9, Functionalities: 9
    },
    {
        id: "hibernate-option",
        label: "Hibernate",
        language: "Java",
        description:
        "A high-performance, open-source ORM (Object-Relational Mapping) tool for Java, providing a framework for mapping Java classes to database tables.",
        imageSrc: "/images/hibernate.png",
        stats: [6, 7, 8, 8], // Speed: 6, Complexity: 7, Popularity: 8, Functionalities: 8
    },
    {
        id: "java-fx-option",
        label: "JavaFX",
        language: "Java",
        description:
        "A Java library for building GUI applications, providing a rich set of APIs for graphics, media, and controls.",
        imageSrc: "/images/javafx.png",
        stats: [8, 7, 7, 8], // Speed: 8, Complexity: 7, Popularity: 7, Functionalities: 8
    },
    {
        id: "android-sdk-option",
        label: "Android SDK",
        language: "Java",
        description:
        "A software development kit for building Android apps, providing a set of tools, libraries, and APIs for creating Android applications.",
        imageSrc: "/images/android-sdk.png",
        stats: [8, 7, 9, 9], // Speed: 8, Complexity: 7, Popularity: 9, Functionalities: 9
    },


      // C++
    {
        id: "qt-option",
        label: "Qt",
        language: "C++",
        description:
        "A cross-platform application development framework for building GUI applications, with a focus on performance and reliability.",
        imageSrc: "/images/qt.png",
        stats: [8, 8, 7, 8], // Speed: 8, Complexity: 8, Popularity: 7, Functionalities: 8
    },


    // JavaScript
    {
        id: "react-option",
        label: "React",
        language: "JavaScript",
        description:
        "A popular JavaScript library for building user interfaces and single-page applications, with a focus on component-based architecture.",
        imageSrc: "/images/react.png",
        stats: [9, 6, 9, 8], // Speed: 9, Complexity: 6, Popularity: 9, Functionalities: 8
    },
    {
        id: "angular-option",
        label: "Angular",
        language: "JavaScript",
        description:
        "A JavaScript framework for building complex web applications, with a focus on dependency injection and modular architecture.",
        imageSrc: "/images/angular.png",
        stats: [8, 7, 8, 9], // Speed: 8, Complexity: 7, Popularity: 8, Functionalities: 9
    },
    {
    id: "electron-option",
    label: "Electron",
    language: "JavaScript",
    description:
        "A framework for building cross-platform desktop applications using web technologies.",
    imageSrc: "/images/electron.png",
    stats: [8, 6, 8, 8], // Speed: 8, Complexity: 6, Popularity: 8, Functionalities: 8
    },


    // C#
    {
        id: "aspnet-option",
        label: "ASP.NET",
        language: "C#",
        description:
        "A web application framework for building web applications, with a focus on performance, security, and scalability.",
        imageSrc: "/images/aspnet.png",
        stats: [8, 7, 8, 8], // Speed: 8, Complexity: 7, Popularity: 8, Functionalities: 8
    },


    // Ruby
    {
        id: "rails-option",
        label: "Ruby on Rails",
        language: "Ruby",
        description:
        "A web application framework for building web applications, with a focus on simplicity, flexibility, and rapid development.",
        imageSrc: "/images/rails.png",
        stats: [8, 6, 8, 8], // Speed: 8, Complexity: 6, Popularity: 8, Functionalities: 8
    },

    
    // Go
    {
        id: "gin-option",
        label: "Gin",
        language: "Go",
        description:
            "A high-performance, lightweight web framework for building web applications, with a focus on speed and simplicity.",
        imageSrc: "/images/gin.png",
        stats: [9, 5, 7, 7], // Speed: 9, Complexity: 5, Popularity: 7, Functionalities: 7
    },
    {
        id: "echo-option",
        label: "Echo",
        language: "Go",
        description:
            "A high-performance, modular web framework for building web applications, with a focus on simplicity and flexibility.",
        imageSrc: "/images/echo.png",
        stats: [8, 6, 6, 7], // Speed: 8, Complexity: 6, Popularity: 6, Functionalities: 7
    },


    // Swift
    {
        id: "swiftui-option",
        label: "SwiftUI",
        language: "Swift",
        description:
            "A modern, declarative UI framework for building user interfaces, with a focus on simplicity and ease of use.",
        imageSrc: "/images/swiftui.png",
        stats: [8, 5, 7, 7], // Speed: 8, Complexity: 5, Popularity: 7, Functionalities: 7
    },


    // Rust
    {
        id: "actix-web-option",
        label: "Actix-web",
        language: "Rust",
        description:
            "A high-performance, modular web framework for building web applications, with a focus on speed and reliability.",
        imageSrc: "/images/actix-web.png",
        stats: [9, 7, 6, 7], // Speed: 9, Complexity: 7, Popularity: 6, Functionalities: 7
    },


    // TypeScript
    {
        id: "nestjs-option",
        label: "NestJS",
        language: "TypeScript",
        description:
            "A progressive, modular web framework for building web applications, with a focus on simplicity and flexibility.",
        imageSrc: "/images/nestjs.png",
        stats: [8, 6, 7, 8], // Speed: 8, Complexity: 6, Popularity: 7, Functionalities: 8
    },


    // Kotlin
    {
        id: "spring-boot-option",
        label: "Spring Boot",
        language: "Kotlin",
        description:
            "A popular, opinionated framework for building web applications, with a focus on simplicity and ease of use.",
        imageSrc: "/images/spring-boot.png",
        stats: [8, 7, 8, 8], // Speed: 8, Complexity: 7, Popularity: 8, Functionalities: 8
    },
];

    const filteredFrameworks = frameworks.filter((framework) => {
        return selectedLanguages.some((language) => framework.language === language);
    });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
        <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10">
          {filteredFrameworks.map((lang) => (
            <FrameworkCard
              key={lang.id}
              id={lang.id}
              language={lang.language}
              label={lang.label}
              description={lang.description}
              imageSrc={lang.imageSrc}
              stats={lang.stats}
            />
          ))}
        </ul>
      </div>
      <div className="flex px-10 pt-8 justify-center space-x-4">
        <Link href="/languages">
          <button className="px-8 py-2 bg-green-500 rounded-md uppercase">
            Back
          </button>
        </Link>
        <Link href="/finish">
          <button className="px-8 py-2 bg-green-500 rounded-md uppercase">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;