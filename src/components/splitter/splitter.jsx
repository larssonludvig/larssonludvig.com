import styles from './splitter.module.css';

export default function Splitter({ colors = ["var(--gray)", "var(--light-gray)", "white"], flip = false }) {
    if (flip) {
        colors = colors.reverse();
    }
    return (
        <div className={styles.splitterContainer}>
            <div className={styles.splitter} style={{backgroundColor: colors[0]}}>
                <div style={{backgroundColor: colors[1]}}>
                    <div style={{backgroundColor: colors[2]}} />
                </div>
            </div>
        </div>
    )
}