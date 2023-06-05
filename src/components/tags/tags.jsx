import styles from "./tags.module.css";

/**
 * Display tags in given list
 * 
 * @example <Tags tags={["C#", "Blazor", "HTML5", "CSS"]} />
 * 
 * @param {Dictionary} tags list of tags to display
 * @returns Tags component 
 */
export default function Tags({ tags }) {
    return (
        <div className={styles.tagsContainer}>
            {tags?.map((tag, index) => {
                return (
                    <div key={index} className={styles.tag}>
                        <p>{tag}</p>
                    </div>
                )
            })}
        </div>
    )
}