import React from 'react';
import styles from './SignalLayout.module.css';

interface SignalLayoutProps {
    metadata: React.ReactNode;
    visual: React.ReactNode;
}

export default function SignalLayout({ metadata, visual }: SignalLayoutProps) {
    return (
        <div className={styles.layout}>
            <div className={styles.metadata}>
                {metadata}
            </div>
            <div className={styles.visual}>
                {visual}
            </div>
        </div>
    );
}
