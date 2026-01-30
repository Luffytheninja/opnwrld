'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const TEXT_TARGET = "COMING SOON";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export default function HeroSection() {
    const productRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [displayText, setDisplayText] = useState("");

    // Parallax logic
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!productRef.current) return;
            // Normalized -1 to 1
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x: x * 20, y: y * -20 }); // Intensity 20deg
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Text Scramble logic
    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayText(prev =>
                    TEXT_TARGET.split("").map((letter, index) => {
                        if (index < iteration) {
                            return TEXT_TARGET[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    }).join("")
                );

                if (iteration >= TEXT_TARGET.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3; // Slow down the reveal
            }, 30);
        };

        // Delay start slightly
        setTimeout(startScramble, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.backgroundGrain} />
            <div className={styles.spotlightHelper} />

            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.tagline}>OPN WRLD 2026</p>
                    <p className={styles.collection}>transmission incoming</p>
                </div>

                <div className={styles.productWrapper}>
                    <div
                        ref={productRef}
                        className={styles.product}
                        style={{
                            transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                        }}
                    >
                        <Image
                            src="/product-hero.png"
                            alt="Blinding Light Tee"
                            width={800}
                            height={960}
                            className={styles.image}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.bottomContent}>
                    <h1 className={styles.headline}>{displayText}</h1>
                    <div className={styles.countdown}>
                        <span>00:00:00:00</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
