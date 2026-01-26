"use client";

import React, { useState } from 'react';
import NavBar from '@/components/ios/NavBar';
import Button from '@/components/ios/Button';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const router = useRouter();
    const [complete, setComplete] = useState(false);

    if (complete) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center space-y-6">
                <div className="w-20 h-20 bg-systemBlue rounded-full flex items-center justify-center text-white animate-in zoom-in duration-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h1 className="text-ios-title1 font-bold">WRLD SECURED</h1>
                <p className="text-ios-body text-systemGray">Your gear is being prepared for transmission. Check your iMessage for updates.</p>
                <Button onClick={() => router.push('/')} className="mt-8">Return to Feed</Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-secondaryBackground">
            <NavBar title="Checkout" largeTitle={false} rightElement={<Button variant="plain" onClick={() => router.back()}>Cancel</Button>} />

            <div className="flex-1 px-4 py-6 space-y-8">
                {/* Item Summary */}
                <section className="bg-white dark:bg-systemGray5/10 rounded-ios-2xl p-4 flex space-x-4 items-center">
                    <div className="w-16 h-20 bg-systemGray6 rounded-ios-lg flex items-center justify-center text-ios-caption2 font-bold uppercase tracking-tighter text-systemGray">GEAR</div>
                    <div className="flex-1">
                        <h3 className="text-ios-headline">GHOST SHELL PARKA</h3>
                        <p className="text-ios-subheadline text-systemGray">Size: L • Black</p>
                    </div>
                    <p className="font-bold">$240.00</p>
                </section>

                {/* Shipping Section */}
                <section className="space-y-2">
                    <h3 className="px-1 text-ios-caption1 text-systemGray font-semibold uppercase tracking-wider text-xs">Shipping Address</h3>
                    <div className="bg-white dark:bg-systemGray5/10 rounded-ios-2xl divide-y divide-separator overflow-hidden">
                        <div className="p-4 flex justify-between items-center group active:bg-systemGray6 transition-colors">
                            <div>
                                <p className="text-ios-body">Victoria Island, Lagos</p>
                                <p className="text-ios-subheadline text-systemGray">Home Address</p>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-systemGray3">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Payment Section */}
                <section className="space-y-2">
                    <h3 className="px-1 text-ios-caption1 text-systemGray font-semibold uppercase tracking-wider text-xs">Payment Method</h3>
                    <div className="bg-white dark:bg-systemGray5/10 rounded-ios-2xl p-4 flex justify-between items-center active:bg-systemGray6 transition-colors font-semibold">
                        <div className="flex items-center space-x-3">
                            <div className="bg-black text-white px-2 py-0.5 rounded italic text-sm">Pay</div>
                            <p className="text-ios-body">Apple Pay</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-systemGray3">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </section>

                {/* Totals */}
                <section className="bg-white dark:bg-systemGray5/10 rounded-ios-2xl divide-y divide-separator overflow-hidden">
                    <div className="p-4 flex justify-between">
                        <span className="text-systemGray">Subtotal</span>
                        <span>$240.00</span>
                    </div>
                    <div className="p-4 flex justify-between text-ios-headline font-bold">
                        <span>Total</span>
                        <span>$240.00</span>
                    </div>
                </section>
            </div>

            {/* Pay Button Sticky Footer */}
            <div className="p-4 safe-bottom glass border-t border-separator">
                <Button fullWidth size="lg" onClick={() => setComplete(true)} className="py-4 rounded-full text-lg">
                    Pay with Apple Pay
                </Button>
            </div>
        </div>
    );
}
