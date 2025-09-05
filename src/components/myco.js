import React, { useState } from "react";

export const Header = () => {
    return <h1>Welcome to My Website</h1>;
};

export const Footer = () => {
    return <footer>© 2023 My Website</footer>;
};

export default function MainContent() {
    return <div>This is the main content of the website.</div>;
};

export function Counter() {
    const [ count, setCount ] = useState(0);
    const [color, setColor] =  useState("red");
    return (
        <div>
            <p>Count:{color} {count}</p>
            <input onChange={(e) => setColor(e.target.value)}></input>
            <button onClick={(e) => setCount(count+1)}>Increment</button>
            <button onClick={(e) => setColor("yellow")}>blue</button>
        </div>
    )
}