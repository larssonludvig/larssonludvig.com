import styles from './iconList.module.css'

/**
 * Generic component for displaying a list of icons
 * 
 * @example <IconList icons={[{icon: <Github />, link: '/github'}]} />
 * 
 * @param {dict} List of icons to display containing icon and link
 * @returns IconList component
 */
export default function IconList({ icons }) {

    return (
        <div className={styles.iconList}>
            <li>
                {icons?.map((icon, index) => {
                    return (
                        <ul key={index} className={styles.icon} onClick={() => window.location.assign(icon.link)}>
                            {icon.icon}
                        </ul>
                    )
                })}
            </li>
        </div>
    )
}