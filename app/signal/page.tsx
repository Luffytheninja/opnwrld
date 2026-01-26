import React from 'react';
import SignalLayout from '@/components/states/SignalLayout';
import SystemMeta from '@/components/states/SystemMeta';
import SignalVisual from '@/components/states/SignalVisual';
import QuietButton from '@/components/ui/QuietButton';
import styles from './page.module.css';

export default function SignalPage() {
    const metadata = (
        <>
            <SystemMeta label="FREQUENCY" value="ALTÉ" />
            <SystemMeta label="ORIGIN" value="LAGOS" />
            <SystemMeta label="SYSTEM" value="OPN WRLD" />
            <SystemMeta label="STATUS" value="ACTIVE" />
            <div className={styles.action}>
                <QuietButton href="/identity">PROCEED</QuietButton>
            </div>
        </>
    );

    const visual = (
        <SignalVisual
            src="/lagos-signal.png"
            alt="Lagos street scene"
        />
    );

    return <SignalLayout metadata={metadata} visual={visual} />;
}
