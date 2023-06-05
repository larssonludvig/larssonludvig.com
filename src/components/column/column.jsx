import styles from './column.module.css'

/**
 * Generic component for displaying a column of elements
 * 
 * @param {Element} children elements to display in column 
 * @returns 
 */
export default function Column({ children }) {
    return (
        <div className={styles.column}>
            {children}
        </div>
    )
}