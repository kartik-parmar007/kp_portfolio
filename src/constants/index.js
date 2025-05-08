// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    ai,
    chatting,
    spotify,
    weather,
    VScode,
    bootstrap,
    python,
    car,
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    pricewise,
    react,
    nodejs,
    tailwindcss,
 
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Nodejs",
        type: "backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "backend",
    },
    {
        imageUrl: VScode,
        name: "VScode",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kartik-parmar-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    }
];

export const projects = [
    {
        iconUrl: weather,
        theme: 'btn-back-red',
        name: 'Weather App',
        description: 'Developed a web application that tracks the live weather details for all cities by using React JS and OpenWeather API .',
        link: 'https://kartik-parmar-weather.netlify.app/',
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-green',
        name: 'Spotify Clone',
        description: 'Created a spotify clone as similar as instagram note song  by using React JS and nocodeapi.',
        link: 'https://kp-music.netlify.app/',
    },
    {
        iconUrl: chatting,
        theme: 'btn-back-blue',
        name: 'Chatting Application',
        description: 'Developed this chatting application by using Reac JS, Python and Chat Engine',
    },
    {
        iconUrl: ai,
        theme: 'btn-back-pink',
        name: 'AI Details Website',
        description: "Created this website for giving information about today's hot topic AI and VR by using Wordpress and open ai API",
    },
];