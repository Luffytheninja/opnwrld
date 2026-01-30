import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.links}>
                        <div className={styles.group}>
                            <h4 className={styles.label}>SOCIALS</h4>
                            <a href="#" className={styles.link}>Instagram</a>
                            <a href="#" className={styles.link}>Twitter</a>
                            <a href="#" className={styles.link}>Discord</a>
                        </div>
                        <div className={styles.group}>
                            <h4 className={styles.label}>SUPPORT</h4>
                            <a href="#" className={styles.link}>Terms</a>
                            <a href="#" className={styles.link}>Privacy</a>
                            <a href="https://whatsapp.com/channel/0029VbC4xwK3rZZUI2Odc50b" target="_blank" className={styles.link}>Contact</a>
                        </div>
                    </div>
                </div>

                <div className={styles.wordmarkWrapper}>
                    <h2 className={styles.wordmark}>OPN WRLD</h2>
                </div>

                <div className={styles.bottom}>
                    <span className={styles.copyright}>© 2026 OPN WRLD — ALL RIGHTS RESERVED</span>
                    <span className={styles.location}>LAGOS, NIGERIA</span>
                </div>
            </div>
        </footer>
    );
}
