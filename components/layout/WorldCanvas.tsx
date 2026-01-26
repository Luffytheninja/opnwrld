import React from 'react';
import styles from './WorldCanvas.module.css';

interface WorldCanvasProps {
    children: React.ReactNode;
}

export default function WorldCanvas({ children }: WorldCanvasProps) {
    return (
        <div className={styles.canvas}>
            {children}
        </div>
    );
}
