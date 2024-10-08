import { FaGithub, FaLink } from "react-icons/fa";

export const Projects = [
    {
        name: "The Nest",
        description: "The Nest is a website written in Microsoft Blazor webassembly. The site is meant to serve as a collection of features that can be of use to different games and communities.",
        img: "images/thenest.png",
        icons: [
            {
                icon: <FaLink size={"2rem"} style={{ backgroundColor: "#fff" }} />,
                link: "https://larssonludvig.github.io/TheNest/",
                tooltip: "larssonludvig.github.io/TheNest/"
            },
            {
                icon: <FaGithub size={"2rem"} style={{ backgroundColor: "#fff" }} />,
                link: "https://github.com/larssonludvig/TheNest",
                tooltip: "github.com/larssonludvig/TheNest"
            }
        ]
    },
    {
        name: "larssonludvig.com",
        description: "A personal website built with React, WebGL and Node.js.",
        img: "images/larssonludvig.png",
        icons: [
            {
                icon: <FaLink size={"2rem"} style={{ backgroundColor: "#fff" }} />,
                link: "https://larssonludvig.com",
                tooltip: "larssonludvig.com"
            },
            {
                icon: <FaGithub size={"2rem"} style={{ backgroundColor: "#fff" }} />,
                link: "https://github.com/larssonludvig/larssonludvig.com",
                tooltip: "github.com/larssonludvig/larssonludvig.com"
            }
        ]
    },
    {
        name: "Look Who's Here",
        description: "A Twitch chat bot that allows viewers of a stream to gather points and spend them on various things.",
        img: "images/lookwhoshere.png",
    }
];