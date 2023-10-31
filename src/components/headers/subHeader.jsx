import styles from './subHeader.module.css';

export default function subHeader({ label }) {
    return (
        <>
            <div className={styles.headerTag} >
                <h2 className={styles.header}>{label}</h2>
            </div>
            <div className={styles.line} />
        </>
    );
}