import React from 'react';
import IdentityBlock from '@/components/states/IdentityBlock';
import QuietButton from '@/components/ui/QuietButton';
import styles from './page.module.css';

export default function IdentityPage() {
    return (
        <div className={styles.container}>
            <IdentityBlock>
                OPN WRLD is a shared frequency<br />
                for those building their own reality.<br />
                Limited transmissions only.
            </IdentityBlock>
            <div className={styles.action}>
                <QuietButton href="/access">PROCEED</QuietButton>
            </div>
        </div>
    );
}
