"use client";

import { useEffect } from "react";

export default function CodeCopy() {
    useEffect(() => {
        const blocks = document.querySelectorAll("pre");

        blocks.forEach((block) => {
            if (block.querySelector(".copy-btn")) return;

            const button = document.createElement("button");
            button.innerText = "Copy";
            button.className = "copy-btn";

            button.onclick = () => {
                const code = block.innerText;
                navigator.clipboard.writeText(code);
                button.innerText = "Copied!";
                setTimeout(() => (button.innerText = "Copy"), 2000);
            };

            block.style.position = "relative";
            block.appendChild(button);
        });
        },
    []);
    
    return null;
}