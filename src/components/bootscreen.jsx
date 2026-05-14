    import {useState, useEffect} from 'react'

    const lines = [
    "loading portfolio.exe",
    "mounting projects/",
    "importing components",
    "starting desktop env"
    ]

    export function BootScreen({onComplete}){
    const [visible, setVisible] = useState([])

  useEffect(() => {
    const timers = [];
    lines.forEach((line, i) => {
        const t = setTimeout(() => {
            setVisible(prev => {
                if (prev.includes(line)) return prev;
                return [...prev, line];
            });
            if (i === lines.length - 1) {
                setTimeout(() => onComplete(), 1000);  // ← simplified, no state check
            }
        }, (i + 1) * 500);  // ← was i*500, now starts at 500ms not 0
        timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
}, []);

    return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-center items-center"
    style={{ background: "#1a1208", fontFamily: "'Courier New', Courier, monospace" }}>

    <div style={{
    width: "100%", background: "#8ab4c8", padding: "6px 0",
    textAlign: "center", fontSize: "15px", color: "#1a1208",
    letterSpacing: "3px", position: "absolute", top: 0
    }}>
    AKANKSHA_OS V98
    </div>

    <p style={{ fontSize: "38px", color: "#f0c040", letterSpacing: "8px", marginBottom: "4px" }}>
    AKANKSHA
    </p>
    <p style={{ fontSize: "15px", color: "#5a7a8a", letterSpacing: "4px", marginBottom: "40px" }}>
    PORTFOLIO · FRONTEND DEV
    </p>

    <div style={{ width: "320px", height: "1px", background: "#2e2010", marginBottom: "28px" }} />

    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "320px", marginBottom: "40px" }}>
    {visible.map((line, i) => (
    <div key={i} style={{ display: "flex", gap: "12px", fontSize: "18px" }}>
    <span style={{ color: "#8ab4c8" }}>&gt;</span>
    <span style={{ color: i === visible.length - 1 ? "#f5ede0" : "#a89060" }}>
    {line}
    {i === visible.length - 1 && (
        <span style={{
            display: "inline-block", width: "7px", height: "11px",
            background: "#f0c040", verticalAlign: "middle", marginLeft: "4px",
            animation: "blink 0.8s step-end infinite"
        }} />
    )}
    </span>
    {i < visible.length - 1 && (
    <span style={{ color: "#6a9e6a", marginLeft: "auto" }}>[ OK ]</span>
    )}
    </div>
    ))}
    </div>

    <div style={{ width: "320px", height: "3px", background: "#2e2010", marginBottom: "10px" }}>
    <div style={{
    height: "100%",
    width: `${(visible.length / lines.length) * 100}%`,
    background: "#f0c040", opacity: 0.7,
    transition: "width 0.4s ease"
    }} />
    </div>

    <p style={{ fontSize: "15px", color: "#3a2a10", letterSpacing: "3px" }}>LOADING...</p>
    <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
    )
    }