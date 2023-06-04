import './orb.css'

export default function Orb({ green }) {
    return (
        <div className={"orb " + green ? "green_orb" : "purple_orb" } />
    )
}