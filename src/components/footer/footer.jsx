import IconList from '../iconList/iconList'
import Splitter from '../splitter/splitter'
import styles from './footer.module.css'
import Row from '../row/row'
import Column from '../column/column' 
import { FaGithub, FaGitlab, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    const contacts = [
        {
            icon: <FaGithub size={"2rem"} />,
            link: "https://github.com/canamo",
            tooltip: "Github"
        },
        {
            icon: <FaGitlab size={"2rem"} />,
            link: "https://git.cs.umu.se/c20lln",
            tooltip: "Gitlab"
        },
        {
            icon: <FaFacebook size={"2rem"} />,
            link: "https://facebook.com/ludvig.larsson.54/",
            tooltip: "Facebook"
        },
        {
            icon: <FaLinkedin size={"2rem"} />,
            link: "https://www.linkedin.com/in/larssonludvig",
            tooltip: "LinkedIn"
        }
    ]

    return (
        <>
            <Splitter color={"var(--dark-gray)"} colors={["white", "var(--light-gray)", "var(--dark-gray)"]} />
            <footer className={styles.footer} >
                <div className={"container"} style={{ marginTop: "-3rem" }}>
                    {/* <p className={styles.underline}>Contact Informtion</p> */}
                    <Row>
                        <Column>
                            <p>Find me at:</p>
                            <IconList icons={contacts} />
                        </Column>
                    </Row>
                </div>
            </footer>
        </>
    )
}
