import styles from './column.module.css'

/**
 * Generic component for displaying a column of elements
 * 
 * @param {Element} children elements to display in column 
 * @returns 
 */
export default function Column({ children, size, width }) {
    return (
        <div className={styles.column} style={{width: width ? width : size ? size : "0", height: size, flex: width ? "0" : size ? "0" : "1"}}>
            {children}
        </div>
    )
}