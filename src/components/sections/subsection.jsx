import SubHeader from "../headers/subHeader";
import IconList from "../iconList/iconList";
import styles from './section.module.css'

export default function SubSection({ label, children, icons }) {
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <SubHeader label={label} />
            {icons && 
                <div className={styles.headerIcons}>
                    <IconList icons={icons} position={"end"} />
                </div>
            }
            {children}
        </div>
    );
}