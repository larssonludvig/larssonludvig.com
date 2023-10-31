import Animation from '../../components/animation/animation'
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
// import Projects from '../../components/projects/projects';
import Splitter from '../../components/splitter/splitter';
import Header from '../../components/header/header';
import styles from './main.module.css'

function App() {
    return (
        <div className={styles.body}>
            <div style={{ height: "95vh", overflow: "visible" }}>
                <Animation />
                <div className={styles.centered} >
                    <div className={styles.arrowDown} />
                </div>
                <Splitter height={"10vh"} />
            </div>
            <div class="container" style={{ marginBottom: "10rem"}}>
                <Card label={"About me"} image={"images/profile-pic.png"} leftImage={true}>
                    <p>My name is Ludvig Larsson and I am a 22 year old student currently studying for a masters degree in Computing Science and Engineering at Umeå University.</p>
                </Card>

                <Card label={"Education"} image={"images/uni.webp"} imageLink={"https://umu.se"}>
                    <p>Ongoing: Masters Degree in Computing Science and Engineering at Umeå University</p>
                    <p>Completed:</p>
                </Card>
                <Card label={"Work Experience"} image={"images/nipsoft.jpg"} imageLink={"https://www.nipsoft.se/"} leftImage={true}>
                    <p>For the last 6 years, I have been working at Nipsoft as a fullstack developer inbetween school semesters. Nipsoft is a Swedish company that develops corporate software targeted towards the sale and management of subscriptions. In total, the amount of work I have done is equivalent to 48 weeks.</p>
                </Card>

                <Header label={"Projects"} />
                {/* <Projects /> */}

                <Header label={"Tools and Technologies"} />
                <Header label={"Other"} />                

            </div>
            <Footer />
        </div>
    );
}

export default App;
