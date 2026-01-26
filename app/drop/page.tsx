'use client';

import React, { useState } from 'react';
import DropGrid from '@/components/drop/DropGrid';
import DropCard from '@/components/drop/DropCard';
import RequestModal from '@/components/drop/RequestModal';
import MutedText from '@/components/ui/MutedText';
import styles from './page.module.css';

const products = [
    {
        id: 1,
        code: 'X01',
        title: 'ASTRAL TEE',
        status: 'LIMITED',
        price: '₦45,000',
    },
    {
        id: 2,
        code: 'X02',
        title: 'FREQUENCY HOODIE',
        status: 'LIMITED',
        price: '₦85,000',
    },
    {
        id: 3,
        code: 'X03',
        title: 'SIGNAL CAP',
        status: 'LIMITED',
        price: '₦35,000',
    },
];

export default function DropPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleRequestAccess = (productTitle: string) => {
        setSelectedProduct(productTitle);
        setModalOpen(true);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <MutedText size="small">CURRENT TRANSMISSION</MutedText>
            </header>

            <DropGrid>
                {products.map((product) => (
                    <DropCard
                        key={product.id}
                        code={product.code}
                        title={product.title}
                        status={product.status}
                        price={product.price}
                        onRequestAccess={() => handleRequestAccess(product.title)}
                    />
                ))}
            </DropGrid>

            <RequestModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                productTitle={selectedProduct}
            />
        </div>
    );
}
