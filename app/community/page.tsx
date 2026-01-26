"use client";

import React from 'react';
import NavBar from '@/components/ios/NavBar';
import Button from '@/components/ios/Button';

const COMMUNITY_LINKS = [
    { title: 'Discord Transmission', description: 'Real-time dev logs and community signals.', label: 'Connect' },
    { title: 'Instagram Archive', description: 'Visual documentation of the WRLD.', label: 'View' },
    { title: 'Twitter Frequency', description: 'Short-form updates and drop alerts.', label: 'Follow' },
];

export default function CommunityPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-label">
            <NavBar title="Community" largeTitle={true} />

            <div className="flex-1 px-4 py-6 pb-32 space-y-6">
                <div className="bg-system-blue text-white p-6 rounded-ios-2xl space-y-2">
                    <h2 className="text-ios-title2 font-bold">THE SIGNAL IS ACTIVE</h2>
                    <p className="text-ios-subheadline opacity-90">Builders are connecting across the globe. Find your node.</p>
                </div>

                <div className="space-y-1">
                    <h3 className="px-1 text-ios-caption1 text-system-gray font-semibold uppercase tracking-wider">Active Channels</h3>
                    <div className="bg-system-gray-6 dark:bg-system-gray-5/10 rounded-ios-2xl divide-y divide-separator overflow-hidden">
                        {COMMUNITY_LINKS.map(link => (
                            <div key={link.title} className="p-4 flex items-center justify-between active:bg-system-gray-5 dark:active:bg-system-gray-5/20 transition-colors">
                                <div className="space-y-0.5">
                                    <h4 className="text-ios-callout font-semibold">{link.title}</h4>
                                    <p className="text-ios-footnote text-system-gray">{link.description}</p>
                                </div>
                                <Button variant="secondary" size="sm">{link.label}</Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-system-gray-6 dark:bg-system-gray-5/10 rounded-ios-2xl text-center space-y-4">
                    <div className="w-16 h-16 bg-system-gray-5 dark:bg-system-gray-4/20 rounded-full mx-auto flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-system-gray">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <h3 className="text-ios-headline">Access Granted</h3>
                    <p className="text-ios-footnote text-secondary-label">Subscribe for drop keys and exclusive community access codes via iMessage.</p>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="+234 ..."
                            className="flex-1 px-4 py-2.5 rounded-ios-lg bg-white dark:bg-black border border-separator text-ios-body focus:outline-none focus:ring-1 focus:ring-system-blue"
                        />
                        <Button>Join</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
