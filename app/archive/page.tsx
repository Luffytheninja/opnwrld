import React from 'react';
import styles from './Archive.module.css';

export default function ArchivePage() {
    const years = ['2025', '2024', '2023'];

    return (
        <div className={styles.archive}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>ARCHIVE</h1>
                    <p className={styles.subtitle}>historical signals and past transmissions</p>
                </header>

                <div className={styles.grid}>
                    {years.map(year => (
                        <div key={year} className={styles.yearSection}>
                            <h2 className={styles.yearTitle}>{year}</h2>
                            <div className={styles.yearGrid}>
                                <div className={styles.placeholderCard}>[ SIGNAL_NULL ]</div>
                                <div className={styles.placeholderCard}>[ SIGNAL_NULL ]</div>
                                <div className={styles.placeholderCard}>[ SIGNAL_NULL ]</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.emptyState}>
                    <p>The archive is currently encrypted. Check back after the next drop.</p>
                </div>
            </div>
        </div>
    );
}
