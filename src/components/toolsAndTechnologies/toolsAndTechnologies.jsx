import IconList from "../iconList/iconList";
import { CsharpOriginal, COriginal, JavaOriginal, VscodeOriginal, VisualstudioPlain, BashOriginal, GitOriginal, Html5Original, Css3Original, JavascriptOriginal, NodejsOriginal, LatexOriginal, UnityOriginal, MatlabOriginal, PythonOriginal, ReactOriginal, OpenglOriginal, PostgresqlOriginal, CplusplusOriginal  } from 'devicons-react'
import SubSection from "../sections/subsection";

export default function ToolsAndTechnologies() {
    const experienced = [
        {
            icon: <CsharpOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "C#"
        },
        {
            icon: <COriginal size={"3.5rem"} />,
            link: "",
            tooltip: "C"

        },
        {
            icon: <img src="images/blazor.png" alt={"Blazor"} />,
            link: "",
            tooltip: "Microsoft Blazor"
        },
        {
            icon: <JavaOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Java"
        },
        {
            icon: <VscodeOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Visual Studio Code"
        },
        {
            icon: <VisualstudioPlain size={"3.5rem"} />,
            link: "",
            tooltip: "Visual Studio"
        },
    ];
    const proficient = [
        {
            icon: <BashOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Bash"
        },
        {
            icon: <GitOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Git"
        },
        {
            icon: <Html5Original size={"3.5rem"} />,
            link: "",
            tooltip: "Html"
        },
        {
            icon: <Css3Original size={"3.5rem"} />,
            link: "",
            tooltip: "Css"
        },
        {
            icon: <JavascriptOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Javascript"
        },
        {
            icon: <NodejsOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Node.js"
        },
        {
            icon: <LatexOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "LaTeX"
        }
    ];
    const novice = [
        {
            icon: <UnityOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Unity"
        },
        {
            icon: <MatlabOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Matlab"
        },
        {
            icon: <PythonOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "Python"
        },
        {
            icon: <ReactOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "React"
        },
        {
            icon: <OpenglOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "OpenGL"
        },
        {
            icon: <PostgresqlOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "PostgreSQL"
        },
        {
            icon: <CplusplusOriginal size={"3.5rem"} />,
            link: "",
            tooltip: "C++"
        }
    ];

    return (
        <>
            <SubSection label={"Experienced"}>
                <IconList icons={experienced} position={"center"} />
            </SubSection>
            <SubSection label={"Proficient"}>
                <IconList icons={proficient} position={"center"} />
            </SubSection>
            <SubSection label={"Novice"}>
                <IconList icons={novice} position={"center"} />
            </SubSection>
        </>
    );
}
