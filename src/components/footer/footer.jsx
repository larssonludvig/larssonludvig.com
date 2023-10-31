import IconList from '../iconList/iconList'
import Splitter from '../splitter/splitter'
import styles from './footer.module.css'
import Row from '../row/row'
import Column from '../column/column' 
import { FaGithub, FaGitlab, FaFacebook } from 'react-icons/fa'

export default function Footer() {
    const contacts = [
        {
            icon: <FaGithub />,
            link: "https://github.com/canamo"
        },
        {
            icon: <FaGitlab />,
            link: "https://git.cs.umu.se/c20lln"
        },
        {
            icon: <FaFacebook />,
            link: "https://facebook.com/ludvig.larsson.54/"
        }
    ]

    return (
        <>
            <Splitter color={"var(--dark-gray)"} flip={true} colors={["white", "var(--light-gray)", "var(--dark-gray)"]} />
            <footer className={styles.footer} >
                <div className='container' style={{ marginTop: "-3rem" }}>
                    <p className={styles.underline}>Contact Informtion</p>
                    <Row>
                        <Column>
                            <p>Find me at:</p>
                            <IconList icons={contacts} />
                        </Column>
                        <Column>
                            <Row>
                                <Column width="10rem">
                                    <p>Phone:</p>
                                    <p>Email:</p>
                                </Column>
                                <Column>
                                    <p>(+46) 0767-64 70 77</p>
                                    <p>ludviglarsson01@live.se</p>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </div>
            </footer>
        </>
    )
}