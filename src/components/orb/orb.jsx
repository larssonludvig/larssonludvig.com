import styles from './orb.module.css'

export default function Orb({ green }) {
    return (
        <div className={styles.orb + " " + green ? styles.greenOrb : styles.purpleOrb } />
    )
}