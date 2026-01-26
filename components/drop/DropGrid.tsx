import React from 'react';
import styles from './DropGrid.module.css';

interface DropGridProps {
    children: React.ReactNode;
}

export default function DropGrid({ children }: DropGridProps) {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    );
}
