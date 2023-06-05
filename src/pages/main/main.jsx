import Animation from '../../components/animation/animation'
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Orb from '../../components/orb/orb'
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
                    <p>Current Education: Masters Degree in Computing Science and Engineering</p> 
                </Card>
                <h1>Work Experience</h1>
                <h1>Projects</h1>
                <h1>Skills</h1>
                <h1>Interests</h1>
                <h1>References</h1>
                <h1>Other</h1>
            </div>
            <Footer />
        </div>
    );
}

export default App;
