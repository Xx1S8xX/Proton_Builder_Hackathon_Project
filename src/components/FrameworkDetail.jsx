// FrameworkDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const FrameworkDetails = () => {
  const { framework } = useParams();
  const frameworks = [
    // Python
    {
      id: "django-option",
      label: "Django",
      language: "Python",
      description:
        "A high-level, full-featured web framework for building complex web applications quickly and efficiently.",
      imageSrc: "/images/django1.png",
      stats: [8, 7, 9, 9], // Speed: 8, Complexity: 7, Popularity: 9, Functionalities: 9
      installCommands: "pip install Django",
      setupCommands: "django-admin startproject myproject",
      docs: "https://docs.djangoproject.com/en/5.1/",
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
      docs: "https://flask.palletsprojects.com/en/3.0.x/",
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
      docs: "https://doc.qt.io/qtforpython/",
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
      docs: "https://kivy.org/doc/stable/",
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
      docs: "https://docs.spring.io/spring-boot/index.html",
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
      docs: "https://hibernate.org/orm/documentation/",
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
      docs: "https://openjfx.io/javadoc/17/",
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
      docs: "https://developer.android.com/docs",
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
      docs: "https://doc.qt.io/qt-5/",
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
      docs: "https://reactjs.org/docs/getting-started.html",
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
      docs: "https://angular.io/docs",
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
      docs: "https://electronjs.org/docs",
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
      docs: "https://docs.microsoft.com/en-us/aspnet/core/",
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
      docs: "https://guides.rubyonrails.org/",
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
      docs: "https://gin-gonic.com/docs/",
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
      docs: "https://echo.labstack.com/guide/",
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
      docs: "https://developer.apple.com/documentation/swiftui",
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
      docs: "https://actix.rs/docs/",
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
      docs: "https://docs.nestjs.com/",
    },
  ];

  const selectedFramework = frameworks.find((fw) => fw.label === framework);

  if (!selectedFramework) {
    return <div>Framework not found</div>;
  }

  return (
    <div>
      <h1>{selectedFramework.label}</h1>
      <p>{selectedFramework.description}</p>
      <p>
        <a href={selectedFramework.documentation} target="_blank" rel="noopener noreferrer">
          Documentation
        </a>
      </p>
      <p>
        <code>Install command: {selectedFramework.installCommand}</code>
      </p>
      <p>
        <code>Setup command: {selectedFramework.setupCommand}</code>
      </p>
    </div>
  );
};

export default FrameworkDetails;