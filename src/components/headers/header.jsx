import styles from './header.module.css';

export default function Header({ label }) {
    return (
        <>
            <div className={styles.headerTag} >
                <h1 className={styles.header}>{label}</h1>
            </div>
            <div className={styles.line} />
        </>
    );
}