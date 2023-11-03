import Animation from '../../components/animation/animation'
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Splitter from '../../components/splitter/splitter';
import styles from './main.module.css'
import ToolsAndTechnologies from '../../components/toolsAndTechnologies/toolsAndTechnologies';
import Section from '../../components/sections/section';
import Projects from '../../components/projects/projects';

export default function App() {
    return (
        <div className={styles.body}>
            <div style={{ height: "95vh" }}>
                <div className={styles.profile}>
                    <img src="images/profile-pic.png" alt="profile-pic" className={styles.profilePic} />
                    <p>Hi! I'm Ludvig Larsson,<br/> a 4:th year Computer Science student at Umeå University.</p>
                </div>
                <Animation />
                <div className={styles.centered} >
                    <div className={styles.arrowDown} />
                </div>
            </div>
            <Splitter height={"10vh"} />
            <div className={"container"} style={{ marginBottom: "10rem"}}>
                <Section label={"About Me"}>
                    <Card image={"images/profile-pic.png"} leftImage={true}>
                        <p>My name is Ludvig Larsson and I am a 22 year old student currently studying for a masters degree in Computing Science and Engineering at Umeå University.</p>
                    </Card>
                </Section>

                <Section label={"Projects"}>
                    <Projects />
                </Section>

                <Section label={"Tools and Technologies"}>
                    <ToolsAndTechnologies />
                </Section>

                <Section label={"Other"}>

                </Section>
            </div>
            <Footer />
        </div>
    );
}
