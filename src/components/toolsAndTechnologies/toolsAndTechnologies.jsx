import SubHeader from "../headers/subHeader";
import IconList from "../iconList/iconList";
import { CsharpOriginal, COriginal, JavaOriginal, VscodeOriginal, VisualstudioPlain, BashOriginal, GitOriginal, Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, LatexOriginal, UnrealengineOriginal, UnityOriginal, MatlabOriginal, PythonOriginal, ReactOriginal, OpenglOriginal, PostgresqlOriginal, CplusplusOriginal  } from 'devicons-react'
import styles from './toolsAndTechnologies.module.css'

export default function ToolsAndTechnologies() {
    const experienced = [
        {
            icon: <CsharpOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <COriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <JavaOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <VscodeOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <VisualstudioPlain size={"3.5rem"} />,
            link: ""
        },
    ];
    const proficient = [
        {
            icon: <BashOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <GitOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <Html5Original size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <Css3Original size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <JavascriptOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <NodejsOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <LatexOriginal size={"3.5rem"} />,
            link: ""
        }
    ];
    const novice = [
        {
            icon: <UnrealengineOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <UnityOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <MatlabOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <PythonOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <ReactOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <OpenglOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <PostgresqlOriginal size={"3.5rem"} />,
            link: ""
        },
        {
            icon: <CplusplusOriginal size={"3.5rem"} />,
            link: ""
        }
    ];

    return (
        <>
            <SubHeader label={"Experienced"} />
            <div className={styles.container} >
                <IconList icons={experienced} center={true} />
            </div>
            <SubHeader label={"Proficient"} />
            <div className={styles.container} >
                <IconList icons={proficient} center={true} />
            </div>
            <SubHeader label={"Novice"} />
            <div className={styles.container} >
                <IconList icons={novice} center={true} />
            </div>
        </>
    );
}
