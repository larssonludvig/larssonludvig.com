import './splitter.css';

export default function Splitter({ color, height }) {
    return (
        <div className="splitter" style={{ 
            borderLeftColor: color ? color : "#fff", 
            borderWidth: (height ? height : "10vh") + " 0 0 100vw"
        }} />
    )
}