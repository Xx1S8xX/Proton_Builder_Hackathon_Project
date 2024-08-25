"use client";
import React, { useEffect } from 'react';
import FrameworkData from "@/components/FrameworkCard";
import Link from "next/link";
import { useAppContext } from '@/context/framework';
import { useRouter } from 'next/navigation';

function Page() {
    const { selectedLanguages, selectedFrameworks, setSelectedFrameworks } = useAppContext();
    const router = useRouter()
    console.log(selectedFrameworks)
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
    installCommands: "pip install Django",
    setupCommands: "django-admin startproject myproject",
},
{
    id: "flask-option",
    label: "Flask",
    language: "Python",
    description:
        "A lightweight, flexible, and modular web framework for building web applications with a small codebase.",
    imageSrc: "/images/flask.png",
    stats: [9, 5, 8, 7], // Speed: 9, Complexity: 5, Popularity: 8, Functionalities: 7
    installCommands: "pip install Flask",
    setupCommands: "flask run",
},
{
    id: "pyqt-option",
    label: "PyQt",
    language: "Python",
    description:
        "A set of Python bindings for the Qt application framework, for building desktop applications.",
    imageSrc: "/images/pyqt.png",
    stats: [8, 7, 7, 8], // Speed: 8, Complexity: 7, Popularity: 7, Functionalities: 8
    installCommands: "pip install PyQt5",
    setupCommands: "pyuic5 -x your_ui_file.ui -o your_ui_file.py",
},
{
    id: "kivy-option",
    label: "Kivy",
    language: "Python",
    description:
        "An open-source Python library for rapid development of applications that make use of user-friendly multi-touch, gestures, scalable, and high-performance graphics.",
    imageSrc: "/images/kivy.png",
    stats: [8, 6, 6, 7], // Speed: 8, Complexity: 6, Popularity: 6, Functionalities: 7
    installCommands: "pip install kivy",
    setupCommands: "python main.py",
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
    installCommands: "mvn install spring-boot-starter",
    setupCommands: "mvn spring-boot:run",
},
{
    id: "hibernate-option",
    label: "Hibernate",
    language: "Java",
    description:
        "A high-performance, open-source ORM (Object-Relational Mapping) tool for Java, providing a framework for mapping Java classes to database tables.",
    imageSrc: "/images/hibernate.png",
    stats: [6, 7, 8, 8], // Speed: 6, Complexity: 7, Popularity: 8, Functionalities: 8
    installCommands: "mvn install hibernate-core",
    setupCommands: "mvn hibernate:generate",
},
{
    id: "java-fx-option",
    label: "JavaFX",
    language: "Java",
    description:
        "A Java library for building GUI applications, providing a rich set of APIs for graphics, media, and controls.",
    imageSrc: "/images/javafx.png",
    stats: [8, 7, 7, 8], // Speed: 8, Complexity: 7, Popularity: 7, Functionalities: 8
    installCommands: "mvn install openjfx",
    setupCommands: "mvn javafx:run",
},
{
    id: "android-sdk-option",
    label: "Android SDK",
    language: "Java",
    description:
        "A software development kit for building Android apps, providing a set of tools, libraries, and APIs for creating Android applications.",
    imageSrc: "/images/android-sdk.png",
    stats: [8, 7, 9, 9], // Speed: 8, Complexity: 7, Popularity: 9, Functionalities: 9
    installCommands: "sdkmanager --install \"platform-tools\"",
    setupCommands: "adb devices",
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
    installCommands: "sudo apt-get install qt5-default",
    setupCommands: "qmake && make",
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
    installCommands: "npx create-react-app my-app",
    setupCommands: "npm start",
},
{
    id: "angular-option",
    label: "Angular",
    language: "JavaScript",
    description:
        "A JavaScript framework for building complex web applications, with a focus on dependency injection and modular architecture.",
    imageSrc: "/images/angular.png",
    stats: [8, 7, 8, 9], // Speed: 8, Complexity: 7, Popularity: 8, Functionalities: 9
    installCommands: "npm install -g @angular/cli",
    setupCommands: "ng new my-project",
},
{
    id: "electron-option",
    label: "Electron",
    language: "JavaScript",
    description:
        "A framework for building cross-platform desktop applications using web technologies.",
    imageSrc: "/images/electron.png",
    stats: [8, 6, 8, 8], // Speed: 8, Complexity: 6, Popularity: 8, Functionalities: 8
    installCommands: "npm install -g electron",
    setupCommands: "electron .",
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
    installCommands: "dotnet add package Microsoft.AspNetCore.App",
    setupCommands: "dotnet run",
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
    installCommands: "gem install rails",
    setupCommands: "rails new myapp",
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
    installCommands: "go get -u github.com/gin-gonic/gin",
    setupCommands: "go run main.go",
},
{
    id: "echo-option",
    label: "Echo",
    language: "Go",
    description:
        "A high-performance, modular web framework for building web applications, with a focus on simplicity and flexibility.",
    imageSrc: "/images/echo.png",
    stats: [8, 6, 6, 7], // Speed: 8, Complexity: 6, Popularity: 6, Functionalities: 7
    installCommands: "go get -u github.com/labstack/echo",
    setupCommands: "go run main.go",
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
    installCommands: "xcode-select --install",
    setupCommands: "swift run",
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
    installCommands: "cargo add actix-web",
    setupCommands: "cargo run",
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
    installCommands: "npm install -g @nestjs/cli",
    setupCommands: "nest new project-name",
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
    installCommands: "mvn install spring-boot-starter",
    setupCommands: "mvn spring-boot:run",
},


    ];
    const filteredFrameworks = frameworks.filter((framework) =>
        selectedLanguages.includes(framework.language)
    );

    const handleFrameworkSelect = (framework) => {
        if (selectedFrameworks.includes(framework)) {
            setSelectedFrameworks(
                selectedFrameworks.filter((fw) => fw !== framework)
            );
        } else {
            setSelectedFrameworks([...selectedFrameworks, framework]);
        }
    };

    useEffect(() => {
        if (selectedLanguages.length == 0) {
            router.push("languages")
        }
    }, [])

    return (
        <div className='flex flex-col justify-between pb-8 min-h-[calc(100vh-400px)]'>
            <div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
                <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10">
                    {filteredFrameworks.map((fw) => (
                        <FrameworkData
                            key={fw.id}
                            id={fw.id}
                            label={fw.label}
                            language={fw.language}
                            description={fw.description}
                            imageSrc={fw.imageSrc}
                            stats={fw.stats}
                            onSelect={() => handleFrameworkSelect(fw.label)}
                            selected={selectedFrameworks.includes(fw.label)}
                        />
                    ))}
                </ul>
            </div>
            <div className="flex px-10 justify-center">
                <Link href="/languages">
                    <button className="px-8 py-2 bg-green-500 rounded-md uppercase mr-4">
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