import Animation from '../../components/animation/animation'
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Splitter from '../../components/splitter/splitter';
import styles from './main.module.css'
import { Experienced, Proficient, Novice } from "../../data/toolsandtech";
import Section from '../../components/sections/section';
import Row from '../../components/row/row';
import Column from '../../components/column/column';
import SubSection from '../../components/sections/subsection';
import IconList from '../../components/iconList/iconList';
import { Projects } from '../../data/projects';
import ItemList from '../../components/itemList/itemList';

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

                <Section label={"Education"}>
                    <Row>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>2020-Ongoing</p>
                        </Column>
                        <Column>
                            <a href="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-teknisk-datavetenskap/"><p>Master of Science Programme in Computing Science and Engineering</p></a>
                        </Column>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>Umeå University</p>
                        </Column>
                    </Row>
                </Section>

                <Section label={"Professional Experience"}>
                    <Row>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>Summers 2017-2023</p>
                        </Column>
                        <Column>
                            <p>Fullstack developer, total of 48 weeks</p>
                        </Column>
                        <Column width={"auto"}>
                            <a href="https://nipsoft.se"><p style={{ whiteSpace: "nowrap" }}>Nipsoft</p></a>
                        </Column>
                    </Row>
                </Section>

                <Section label={"Projects"}>
                    <ItemList items={Projects} />
                </Section>                

                <Section label={"Leadership and Volunteering"}>
                    <Row>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>2021-2022</p>
                        </Column>
                        <Column>
                            <p>C-ego board position</p>
                        </Column>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>CS-section at Umeå University</p>
                        </Column>
                    </Row>
                    <Row>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>2022-2023</p>
                        </Column>
                        <Column>
                            <p>Secretary board position</p>
                        </Column>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>CS-section at Umeå University</p>
                        </Column>
                    </Row>
                    <Row>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>2022-2023</p>
                        </Column>
                        <Column>
                            <p>Alternate Member for the NTK Student Union Council</p>
                        </Column>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>NTK Student Union</p>
                        </Column>
                    </Row>
                    <Row>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>2021-2023</p>
                        </Column>
                        <Column>
                            <p>Bar Team Manager</p>
                        </Column>
                        <Column width={"auto"}>
                            <p style={{ whiteSpace: "nowrap" }}>Student Union House Origo</p>
                        </Column>
                    </Row>
                </Section>

                <Section label={"Tools and Technologies"}>
                    <SubSection label={"Experienced"}>
                        <IconList icons={Experienced} position={"center"} />
                    </SubSection>
                    <SubSection label={"Proficient"}>
                        <IconList icons={Proficient} position={"center"} />
                    </SubSection>
                    <SubSection label={"Novice"}>
                        <IconList icons={Novice} position={"center"} />
                    </SubSection>
                </Section>

                <Section label={"Hobbies and Interests"}>

                </Section>
            </div>
            <Footer />
        </div>
    );
}
