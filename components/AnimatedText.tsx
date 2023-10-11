"use client"

import {Cursor, useTypewriter} from "react-simple-typewriter";

export default function AnimatedText() {
    const [text, count] = useTypewriter({
        words: [
            "Hey, The Name's Pretam Dey",
            "The Guy Who Love Blender Render",
            "The Guy Who Love DSLR Snap",
        ],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 40,
    })
    return (
        <div>
            <h1>
                <span className={"text-4xl font-bold"}>{text}</span>
                <Cursor cursorColor={"#f7550ae9"}/>
            </h1>
        </div>
    );
}