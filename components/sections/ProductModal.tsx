'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProductModal.module.css';
import MagneticButton from '@/components/ui/MagneticButton';

interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    price: string;
    status: string;
    image: string;
    category?: string;
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Select size');
            return;
        }
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
            alert('Added to cart');
        }, 800);
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className={styles.content}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageOuter}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={1200}
                                height={1500}
                                className={styles.image}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.detailsSection}>
                        <div className={styles.meta}>
                            <span className={styles.code}>{product.code}</span>
                            <span className={styles.category}>{product.category}</span>
                        </div>

                        <h2 className={styles.name}>{product.name}</h2>
                        <p className={styles.price}>{product.price}</p>

                        <div className={styles.descriptionContainer}>
                            <h3 className={styles.label}>TECHNICAL SPECS</h3>
                            <p className={styles.description}>{product.description}</p>
                        </div>

                        <div className={styles.sizeSection}>
                            <h3 className={styles.label}>SELECT SIZE</h3>
                            <div className={styles.sizes}>
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button
                                        key={size}
                                        className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <MagneticButton
                            className={`${styles.buyButton} ${isAdding ? styles.loading : ''}`}
                            onClick={handleAddToCart}
                        >
                            {isAdding ? 'TRANSMITTING...' : 'ADD TO BAG'}
                        </MagneticButton>

                        <div className={styles.footerInfo}>
                            <p>Global shipping available. Estimated delivery 14-21 days.</p>
                            <p>Frequency secured via high-grade TLS encryption.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
