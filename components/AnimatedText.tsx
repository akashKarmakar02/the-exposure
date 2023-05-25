"use client"

import TypeIt from "typeit-react";

export default function AnimatedText() {
    return (
        <TypeIt
            options={{
                strings: ["Hey, I'm Pritam", "A "],
                speed: 10,
                deleteSpeed: 3,

            }}
        />
    );
}