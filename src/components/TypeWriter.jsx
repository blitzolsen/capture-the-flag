import React, { useEffect, useState } from 'react'

export default function TypeWriter({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(prevBlink => !prevBlink);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText((current) => {
                if (current.length < text.length) {
                    return text.slice(0, current.length + 1);
                }
                clearInterval(interval);
                return current;
            });
        }, 500);
        return () => clearInterval(interval);
    }, [text]);
  return (
    <span>{displayedText}{blink && <span className="cursor">|</span>}</span>
  )
}
