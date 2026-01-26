import React from 'react';
import SignalForm from '@/components/states/SignalForm';
import QuietButton from '@/components/ui/QuietButton';
import DividerLine from '@/components/ui/DividerLine';
import styles from './page.module.css';

export default function AccessPage() {
    return (
        <div className={styles.container}>
            <div className={styles.split}>
                <div className={styles.option}>
                    <h2 className={styles.title}>JOIN SIGNAL</h2>
                    <SignalForm />
                </div>

                <DividerLine />

                <div className={styles.option}>
                    <h2 className={styles.title}>VIEW DROP</h2>
                    <QuietButton href="/drop">ENTER DROP</QuietButton>
                </div>
            </div>
        </div>
    );
}
