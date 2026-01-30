'use client';

import React from 'react';
import styles from './Community.module.css';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CommunityPage() {
    return (
        <div className={styles.community}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>COMMUNITY</h1>
                    <p className={styles.subtitle}>nodes, networks, and frequencies</p>
                </header>

                <div className={styles.main}>
                    <div className={styles.signalCard}>
                        <div className={styles.signalLevel}>SIGNAL STRENGTH: HIGH</div>
                        <h2 className={styles.signalTitle}>JOIN THE TRANSMISSION</h2>
                        <p className={styles.signalDescription}>
                            Members get priority access to drop keys and exclusive community access codes via iMessage.
                        </p>

                        <div className={styles.form}>
                            <input
                                type="text"
                                placeholder="+234 ..."
                                className={styles.input}
                            />
                            <a href="https://whatsapp.com/channel/0029VbC4xwK3rZZUI2Odc50b" target="_blank" rel="noopener noreferrer">
                                <MagneticButton className={styles.button}>CONNECT</MagneticButton>
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        <a href="https://whatsapp.com/channel/0029VbC4xwK3rZZUI2Odc50b" target="_blank" className={styles.linkCard}>
                            <span className={styles.linkLabel}>PRIMARY NODE</span>
                            <span className={styles.linkName}>WHATSAPP</span>
                        </a>
                        <a href="https://instagram.com" className={styles.linkCard}>
                            <span className={styles.linkLabel}>VISUAL ARCHIVE</span>
                            <span className={styles.linkName}>INSTAGRAM</span>
                        </a>
                    </div>
                </div>

                <div className={styles.footerNote}>
                    <p>Access is conditional. Stay calibrated.</p>
                </div>
            </div>
        </div>
    );
}
