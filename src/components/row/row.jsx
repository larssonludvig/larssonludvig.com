import styles from './row.module.css'

/**
 * Generic component for displaying a row of elements
 * 
 * @param {Element} children elements to display in row  
 * @returns 
 */
export default function Row({ children }) {
    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}