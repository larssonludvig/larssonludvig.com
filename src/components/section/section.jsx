import Header from "../headers/header";

export default function Section({ label, children }) {
    return (
        <>
            <Header label={label} />
            {children}
        </>
    );
}