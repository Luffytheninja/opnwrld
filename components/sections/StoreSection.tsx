'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './StoreSection.module.css';
import ProductModal from './ProductModal';

const products = [
    {
        id: 1,
        code: 'X01',
        name: 'Blinding Light Tee',
        description: 'Premium heavyweight cotton tee with retro-chrome OPEN WORLD graphic. First drop from the frequency.',
        price: '₦45,000',
        status: 'COMING SOON',
        image: '/product-hero.png',
        category: 'Apparel'
    },
    {
        id: 2,
        code: 'X02',
        name: 'Frequency Hoodie',
        description: 'Oversized hoodie with embroidered sigil. Built for those who move in silence.',
        price: '₦85,000',
        status: 'COMING SOON',
        image: '/product-hero.png',
        category: 'Apparel'
    },
    {
        id: 3,
        code: 'X03',
        name: 'Signal Cap',
        description: 'Structured 6-panel cap with woven label. Low profile, high frequency.',
        price: '₦35,000',
        status: 'COMING SOON',
        image: '/product-hero.png',
        category: 'Accessory'
    },
    {
        id: 4,
        code: 'X04',
        name: 'WRLD Tote',
        description: 'Heavy canvas tote with screen-printed frequency map.',
        price: '₦25,000',
        status: 'COMING SOON',
        image: '/product-hero.png',
        category: 'Accessory'
    },
];

export default function StoreSection() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

    return (
        <section id="store" className={styles.store}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>STORE</h2>
                    <p className={styles.subtitle}>artifacts of the frequency</p>
                </div>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={styles.card}
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={480}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.topInfo}>
                                    <span className={styles.code}>{product.code}</span>
                                    <span className={styles.category}>{product.category}</span>
                                </div>
                                <h3 className={styles.name}>{product.name}</h3>
                                <div className={styles.bottomInfo}>
                                    <span className={styles.price}>{product.price}</span>
                                    <span className={styles.status}>{product.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}
