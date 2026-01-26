import React from 'react';
import Image from 'next/image';
import styles from './SignalVisual.module.css';

interface SignalVisualProps {
    src: string;
    alt: string;
}

export default function SignalVisual({ src, alt }: SignalVisualProps) {
    return (
        <div className={styles.container}>
            <Image
                src={src}
                alt={alt}
                fill
                className={styles.image}
                priority
            />
        </div>
    );
}
