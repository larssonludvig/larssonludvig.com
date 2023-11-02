import styles from './iconList.module.css'

/**
 * Generic component for displaying a list of icons
 * 
 * @example <IconList icons={[{icon: <Github />, link: '/github'}]} />
 * 
 * @param {dict} List of icons to display containing icon and link
 * @returns IconList component
 */
export default function IconList({ icons, center = false }) {
    return (
        <div className={styles.iconList} style={center ? { justifyContent: "center" } : {}}>
            {icons?.map((icon, index) => {
                return (
                    <>
                        <div key={index} className={styles.icon} style={icon.link !== "" ? { cursor: "pointer" } : {}} onClick={() => icon.link !== "" ? window.location.assign(icon.link) : console.log("No link to follow")}>
                            {icon.icon}
                            {icons.tooltip !== "" ? 
                                <span className={styles.tooltip}>{icon.tooltip}</span>
                                : {}
                            }
                        </div>
                    </>
                )
            })}
        </div>
    )
}