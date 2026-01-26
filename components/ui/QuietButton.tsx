import React from 'react';
import styles from './QuietButton.module.css';

interface QuietButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit';
}

export default function QuietButton({ children, onClick, href, type = 'button' }: QuietButtonProps) {
    if (href) {
        return (
            <a href={href} className={styles.button}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
}
