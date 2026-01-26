import React from 'react';
import MutedText from '../ui/MutedText';
import styles from './PortalText.module.css';

export default function PortalText() {
    return (
        <div className={styles.container}>
            <MutedText>SIGNAL AVAILABLE</MutedText>
        </div>
    );
}
