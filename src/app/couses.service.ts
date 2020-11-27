// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CousesService {

// constructor() { }
//   courses = [
//   {
//       bannerurl: "../../../assets/images/course-banner/html.jpg",
//       description:"HTML is the standard markup language for creating Web pages.",
//       name: "HTML: Hypertext Markup Language",
//       title: "What is HTML ?",
//       rating: 4,
//       duration: "20 min",
//       cate: "front-end",
//       cpath: "what-is-html"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/css.jpg",
//       description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ",
//       name: "CSS: Cascading Style Sheets",
//       title: "What is CSS ?",
//       rating: 5,
//       duration: "40 min",
//       cate: "front-end",
//       cpath: "what-is-css"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/javascript.jpg",
//         description: "JavaScript is the Programming Language for the Web.JavaScript can update and change both HTML and CSS",
//       name: "Javascript: Learn to Program JS",
//       title: "What is Javascript ?",
//       rating: 5,
//       duration: "1 Hours",
//       cate: "front-end",
//       cpath: "what-is-javascript"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/angular.jpg",
//      description: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
//       name: "Angular: By Google",
//       title: "What is Angular ?",
//       rating: 5,
//       duration: "45 Hours",
//       cate: "front-end",
//       cpath: "what-is-angular"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/bootstrap.jpg",
//       description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components",
//       name: "Bootstrap: Powerfull CSS Framework",
//       title: "What is Bootstrap ?",
//       rating: 5,
//       duration: "4 Hours",
//       cate: "front-end",
//       cpath: "what-is-bootstrap"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/react.jpg",
//       description: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
//       name: "React: The Most Popular Front End Framework",
//       title: "What is React ?",
//       rating: 5,
//       duration: "35 Hours",
//       cate: "front-end",
//       cpath: "what-is-react"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/vue.jpg",
//      description: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru",
//       name: "Vue.js: Build an App With Vue.js",
//       title: "What is Vue.js ?",
//       rating: 5,
//       duration: "34 Hours",
//       cate: "front-end",
//       cpath: "what-is-vuejs"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/nodejs.jpg",
//     description: "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.",
//       name: "NodeJS: JS Back-end",
//       title: "What is NodeJS ?",
//       rating: 5,
//       duration: "50 Hours",
//       cate: "back-end",
//       cpath: "what-is-nodejs"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/csharp.jpg",
//       description: "C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
//       name: "C#: Powerfull languge",
//       title: "What is C# ?",
//       rating: 5,
//       duration: "70 Hours",
//       cate: "back-end",
//       cpath: "what-is-c#"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/java.jpg",
//      description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
//       name: "Java: By Oracle",
//       title: "What is Java ?",
//       rating: 5,
//       duration: "60 Hours",
//       cate: "back-end",
//       cpath: "what-is-java"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/php.jpg",
//      description: "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",
//       name: "PHP: Popular web backend language",
//       title: "What is PHP ?",
//       rating: 5,
//       duration: "60 Hours",
//       cate: "back-end",
//       cpath: "what-is-php"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/ruby.jpg",
//       description: "Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro Matz Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection.",
//       name: "Ruby On Rails: Blink Blink",
//       title: "What is ROR ?",
//       rating: 5,
//       duration: "35 Hours",
//       cate: "back-end",
//       cpath: "what-is-ror"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/python.jpg",
//       description: "Python is an interpreted, high-level and general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
//       name: "Python: Hello, World!",
//       title: "What is Python ?",
//       rating: 5,
//       duration: "60 Hours",
//       cate: "back-end",
//       cpath: "what-is-python"
//   },
//   {
//       bannerurl: "../../../assets/images/course-banner/asp.jpg",
//     description: "ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services.",
//       name: "Asp.net: By Microsoft",
//       title: "What is asp.net ?",
//       rating: 5,
//       duration: "60 Hours",
//       cate: "back-end",
//       cpath: "what-is-asp"
//   }
// ]
// }
