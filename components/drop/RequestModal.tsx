'use client';

import React, { useState } from 'react';
import QuietButton from '../ui/QuietButton';
import styles from './RequestModal.module.css';

interface RequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    productTitle: string;
}

export default function RequestModal({ isOpen, onClose, productTitle }: RequestModalProps) {
    const [size, setSize] = useState('');
    const [contact, setContact] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to an API
        console.log('Request:', { productTitle, size, contact });
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setSize('');
            setContact('');
        }, 2000);
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {submitted ? (
                    <div className={styles.success}>
                        <p>Request logged.</p>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.title}>REQUEST ACCESS</h2>
                        <p className={styles.product}>{productTitle}</p>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className={styles.select}
                                required
                            >
                                <option value="">Select size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                            <input
                                type="text"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="enter contact frequency"
                                className={styles.input}
                                required
                            />
                            <div className={styles.actions}>
                                <QuietButton type="submit">SEND REQUEST</QuietButton>
                                <button type="button" onClick={onClose} className={styles.cancel}>
                                    CANCEL
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
