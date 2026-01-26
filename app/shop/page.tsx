"use client";

import React from 'react';
import NavBar from '@/components/ios/NavBar';
import ProductCard from '@/components/shop/ProductCard';

const PRODUCTS = [
    { id: '1', name: 'GHOST SHELL PARKA', price: '$240.00', category: 'Outerwear', image: '' },
    { id: '2', name: 'NEURAL TEE (BLACK)', price: '$65.00', category: 'Essentials', image: '' },
    { id: '3', name: 'SIGNAL BEANIE', price: '$45.00', category: 'Accessories', image: '' },
    { id: '4', name: 'VOID CARGO PANTS', price: '$180.00', category: 'Bottoms', image: '' },
    { id: '5', name: 'DATA OVERLOAD HOODIE', price: '$120.00', category: 'Outerwear', image: '' },
    { id: '6', name: 'PROTOCOL SOCKS', price: '$22.00', category: 'Accessories', image: '' },
];

export default function ShopPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <NavBar
                title="Store"
                largeTitle={true}
                rightElement={
                    <button className="text-systemBlue p-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg>
                    </button>
                }
            />

            <div className="flex-1 px-4 py-4 pb-32">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
