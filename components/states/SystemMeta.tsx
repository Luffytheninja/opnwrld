import React from 'react';
import MutedText from '../ui/MutedText';
import styles from './SystemMeta.module.css';

interface SystemMetaProps {
    label: string;
    value: string;
}

export default function SystemMeta({ label, value }: SystemMetaProps) {
    return (
        <div className={styles.meta}>
            <MutedText size="small">{label}:</MutedText>
            <span className={styles.value}>{value}</span>
        </div>
    );
}
