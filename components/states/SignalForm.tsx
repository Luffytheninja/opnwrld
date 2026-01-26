'use client';

import React, { useState } from 'react';
import QuietButton from '../ui/QuietButton';
import styles from './SignalForm.module.css';

export default function SignalForm() {
    const [submitted, setSubmitted] = useState(false);
    const [contact, setContact] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to an API
        console.log('Contact submitted:', contact);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.success}>
                <p>Signal received.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="enter contact frequency"
                className={styles.input}
                required
            />
            <QuietButton type="submit">TRANSMIT</QuietButton>
        </form>
    );
}
