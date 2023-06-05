import styles from './animation.module.css'

export default function Animation({ children }) {
    return (
        <div className={styles.animation}>
            {children}
        </div>
    )
}