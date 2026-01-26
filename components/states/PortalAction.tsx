import React from 'react';
import QuietButton from '../ui/QuietButton';
import styles from './PortalAction.module.css';

export default function PortalAction() {
    return (
        <div className={styles.container}>
            <QuietButton href="/signal">
                ENTER
            </QuietButton>
        </div>
    );
}
