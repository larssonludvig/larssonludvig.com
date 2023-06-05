import Animation from '../../components/animation/animation'
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Orb from '../../components/orb/orb'
import Projects from '../../components/projects/projects';
import Skills from '../../components/skills/skills';
import Splitter from '../../components/splitter/splitter';
import styles from './main.module.css'

function App() {
    return (
        <div className={styles.body}>
            <div style={{ height: '80vh' }}>
                <Animation >
                    <Orb color={"blue"} />
                </Animation>
                <div className={styles.centered}>
                    <div className={styles.arrowDown} />
                </div>
                <Splitter />
            </div>
            <div className="container" style={{ marginBottom: "10rem"}}>
                <Card image={"../../public/../images/uni.webp"}>
                    <h1>Education</h1>
                    <p>Ongoing: Masters Degree in Computing Science and Engineering at Umeå University</p>
                    <p>Completed:</p>
                </Card>
                <Card image={"images/nipsoft.jpg"} imageLink={"https://www.nipsoft.se/"}>
                    <h1>Work Experience</h1>
                    <p>For the last 6 years, I have been working at Nipsoft as a fullstack developer inbetween school semesters. Nipsoft is a Swedish company that develops corporate software targeted towards the sale and management of subscriptions. In total, the amount of work I have done is equivalent to 48 weeks.</p>
                </Card>

                <h1>Projects</h1>
                <Projects />

                <h1>Skills</h1>
                <Skills />

                <h1>Interests</h1>
                <h1>Other</h1>
                <h1>References</h1>
            </div>
            <Footer />
        </div>
    );
}

export default App;
