import ItemList from "../itemList/itemList";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
    const items = [
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
                    link: "https://github.com/Canamo/larssonludvig.com",
                    tooltip: "github.com/Canamo/larssonludvig.com"
                }
            ]
        },
        {
            name: "Look Who's Here",
            description: "A Twitch chat bot that allows viewers of a stream to gather points and spend them on various things.",
            img: "images/lookwhoshere.png",
        }
    ];

    return (
        <ItemList items={items} />
    )
}