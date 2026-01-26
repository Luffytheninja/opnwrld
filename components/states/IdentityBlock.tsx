import React from 'react';
import styles from './IdentityBlock.module.css';

interface IdentityBlockProps {
    children: React.ReactNode;
}

export default function IdentityBlock({ children }: IdentityBlockProps) {
    return (
        <div className={styles.block}>
            <p className={styles.text}>{children}</p>
        </div>
    );
}
