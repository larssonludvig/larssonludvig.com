import Tags from "../tags/tags"
import styles from "./projects.module.css"

/**
 * Project item component
 * 
 * @param {Dictionary} project project to display 
 * @returns item component
 */
function Item({ project }) {
    return (
        <div className={styles.item}>
            <img className={styles.image} src={project.image} alt={project.name} />
            <h1>{project.name}</h1>
            <Tags tags={project.languages} />
        </div>
    )
}

/**
 * Component for displaying projects
 * 
 * @returns projects component
 */
export default function Projects() {
    const projects = [
        {
            name: "NBS8",
            image: "images/nipsoft.jpg",
            languages: ["C#", "Blazor", "HTML5", "CSS"]
        },
        {
            name: "Yotei",
            image: "images/ubk-logga.jpg",
            languages: ["JS", "Java", "HTML5", "CSS"]
        }
    ]

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.innerContainer}>
                {projects?.map((project, index) => {
                    return (
                        <Item key={index} project={project} />
                    )
                })}
            </div>
        </div>
    )
}