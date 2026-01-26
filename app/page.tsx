"use client";

import React from 'react';
import NavBar from '@/components/ios/NavBar';
import Button from '@/components/ios/Button';
import Image from 'next/image';

export default function FeedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar title="WRLD VIBE" largeTitle={true} />

      <div className="flex-1 px-4 py-6 space-y-8 pb-32">
        {/* Featured Drop Section */}
        <section className="relative h-[60vh] rounded-ios-2xl overflow-hidden bg-black flex flex-col justify-end p-6">
          <Image
            src="/hero.png"
            alt="System Failure Collection"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <div className="relative z-10 space-y-2">
            <span className="text-ios-caption1 text-white/60 uppercase tracking-widest font-bold">New Drop</span>
            <h2 className="text-ios-title1 font-bold text-white">SYSTEM FAILURE COLLECTIONS</h2>
            <p className="text-ios-subheadline text-white/80">Engineered for the Lagos creative ecosystem. Limited release.</p>
            <div className="pt-4">
              <Button onClick={() => window.location.href = '/shop'} size="lg">Explore Collection</Button>
            </div>
          </div>
        </section>

        {/* Community Signal */}
        <section className="bg-system-gray-6 dark:bg-system-gray-5/10 rounded-ios-2xl p-6 space-y-4">
          <h3 className="text-ios-headline">COMMUNITY FREQUENCY</h3>
          <p className="text-ios-subheadline text-secondary-label">
            Join 2,400+ builders in the OPN frequency. Access exclusive transmissions and early access keys.
          </p>
          <Button variant="secondary" onClick={() => window.location.href = '/community'}>Join the Frequency</Button>
        </section>

        {/* Brand Mantra */}
        <section className="py-12 text-center space-y-4">
          <div className="w-12 h-1 bg-system-gray-4 mx-auto rounded-full" />
          <p className="text-ios-title3 font-medium px-8 italic">
            "Your reality is waiting to be built. We just provide the gear."
          </p>
          <p className="text-ios-footnote text-system-gray uppercase tracking-widest">Opn Wrld Studio — 2026</p>
        </section>
      </div>
    </div>
  );
}
