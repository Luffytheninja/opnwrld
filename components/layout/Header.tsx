'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Background logic
            setIsScrolled(currentScrollY > 20);

            // Visibility logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down - hide
            } else {
                setIsVisible(true); // Scrolling up - show
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!isVisible ? styles.hidden : ''}`}>
            <nav className={styles.nav}>
                <div className={styles.navGroup}>
                    <Link href="/archive" className={styles.link}>archive</Link>
                    <Link href="#store" className={styles.link}>new drops</Link>
                </div>

                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="OPN WRLD"
                        width={48}
                        height={48}
                        priority
                    />
                </Link>

                <div className={styles.navGroup}>
                    <Link href="/community" className={styles.link}>community</Link>
                    <a href="https://whatsapp.com/channel/0029VbC4xwK3rZZUI2Odc50b" target="_blank" rel="noopener noreferrer" className={styles.link}>contact</a>
                </div>
            </nav>
        </header>
    );
}
