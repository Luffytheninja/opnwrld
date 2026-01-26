"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/ios/NavBar';
import Button from '@/components/ios/Button';

export default function ProductDetail({ params }: { params: { id: string } }) {
    const router = useRouter();

    // In a real app, fetch product by ID. For now, mock it.
    const product = {
        id: params.id,
        name: "GHOST SHELL PARKA",
        price: "$240.00",
        description: "The GHOST SHELL is our flagship technical outer layer. Engineered with high-density nylon and waterproof seam sealing. Designed for the unpredictable weather of the Lagos metropolitan area.",
        features: ["Waterproof", "3-Pocket Tech Configuration", "Breathable Mesh Lining", "Protocol 01 Branding"],
        image: ""
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <NavBar
                title="Product"
                largeTitle={false}
                rightElement={<Button variant="plain" onClick={() => router.push('/shop')}>Back</Button>}
            />

            <div className="flex-1 pb-32">
                {/* Gallery Placeholder */}
                <div className="aspect-[4/5] bg-systemGray6 dark:bg-systemGray5/10 flex items-center justify-center relative">
                    <span className="text-ios-caption2 uppercase tracking-widest text-systemGray font-bold">Transmission Image Pending</span>
                    <div className="absolute top-4 left-4 bg-black/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold uppercase tracking-widest">v2.6.0</div>
                </div>

                <div className="px-6 py-8 space-y-6">
                    <div className="space-y-1">
                        <h1 className="text-ios-largeTitle font-bold tracking-tight">{product.name}</h1>
                        <p className="text-ios-title3 text-systemBlue font-semibold">{product.price}</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-ios-body leading-relaxed text-secondaryLabel">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-3 pt-4">
                        <h3 className="text-ios-caption1 text-systemGray font-semibold uppercase tracking-wider">Specifications</h3>
                        <ul className="grid grid-cols-2 gap-3">
                            {product.features.map(f => (
                                <li key={f} className="flex items-center space-x-2 text-ios-footnote">
                                    <span className="w-1 h-1 bg-systemBlue rounded-full" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Buy Button Sticky Footer */}
            <div className="p-4 safe-bottom glass border-t border-separator flex space-x-4">
                <Button variant="secondary" className="px-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </Button>
                <Button fullWidth size="lg" onClick={() => router.push('/checkout')}>
                    Add to Drop Bag — {product.price}
                </Button>
            </div>
        </div>
    );
}
