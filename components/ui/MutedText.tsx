import React from 'react';
import styles from './MutedText.module.css';

interface MutedTextProps {
    children: React.ReactNode;
    size?: 'small' | 'normal';
}

export default function MutedText({ children, size = 'normal' }: MutedTextProps) {
    return (
        <span className={`${styles.text} ${styles[size]}`}>
            {children}
        </span>
    );
}
