'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './StateTransition.module.css';

interface StateTransitionProps {
    children: React.ReactNode;
}

export default function StateTransition({ children }: StateTransitionProps) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        setTransitionStage('fadeOut');

        const timer = setTimeout(() => {
            setDisplayChildren(children);
            setTransitionStage('fadeIn');
        }, 400);

        return () => clearTimeout(timer);
    }, [pathname, children]);

    return (
        <div
            className={`${styles.transition} ${styles[transitionStage]}`}
        >
            {displayChildren}
        </div>
    );
}
