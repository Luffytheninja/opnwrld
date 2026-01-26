'use client';

import React, { useState } from 'react';
import QuietButton from '../ui/QuietButton';
import styles from './DropCard.module.css';

interface DropCardProps {
    code: string;
    title: string;
    status: string;
    price: string;
    onRequestAccess: () => void;
}

export default function DropCard({ code, title, status, price, onRequestAccess }: DropCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.placeholder}>
                <span className={styles.code}>{code}</span>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.status}>{status}</p>
                <p className={styles.price}>{price}</p>
            </div>
            <QuietButton onClick={onRequestAccess}>REQUEST ACCESS</QuietButton>
        </div>
    );
}
