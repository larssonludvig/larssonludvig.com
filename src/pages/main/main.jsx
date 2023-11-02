import Animation from '../../components/animation/animation'
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Splitter from '../../components/splitter/splitter';
import styles from './main.module.css'
import ToolsAndTechnologies from '../../components/toolsAndTechnologies/toolsAndTechnologies';
import Section from '../../components/section/section';

export default function App() {
    return (
        <div className={styles.body}>
            <div style={{ height: "95vh" }}>
                <Animation />
                <div className={styles.centered} >
                    <div className={styles.arrowDown} />
                </div>
                <Splitter height={"10vh"} />
            </div>
            <div className="container" style={{ marginBottom: "10rem"}}>
                <Section label={"About me"}>
                    <Card image={"images/profile-pic.png"} leftImage={true}>
                        <p>My name is Ludvig Larsson and I am a 22 year old student currently studying for a masters degree in Computing Science and Engineering at Umeå University.</p>
                    </Card>
                </Section>

                <Section label={"Education"}>
                    <Card image={"images/uni.webp"} imageLink={"https://umu.se"}>
                        <p>Ongoing: Masters Degree in Computing Science and Engineering at Umeå University</p>
                        <p>Completed:</p>
                    </Card>
                </Section>

                <Section label={"Work Experience"}>
                    <Card image={"images/nipsoft.jpg"} imageLink={"https://www.nipsoft.se/"} leftImage={true}>
                        <p>For the last 6 years, I have been working at Nipsoft as a fullstack developer inbetween school semesters. Nipsoft is a Swedish company that develops corporate software targeted towards the sale and management of subscriptions. In total, the amount of work I have done is equivalent to 48 weeks.</p>
                    </Card>
                </Section>

                <Section label={"Projects"}>
                    
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
