"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabBar = () => {
    const pathname = usePathname();

    const tabs = [
        {
            name: 'Feed', path: '/', icon: (active: boolean) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            name: 'Shop', path: '/shop', icon: (active: boolean) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            )
        },
        {
            name: 'Community', path: '/community', icon: (active: boolean) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 glass border-t border-separator safe-bottom z-50">
            <div className="flex justify-around items-center h-16">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.path;
                    return (
                        <Link
                            key={tab.name}
                            href={tab.path}
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isActive ? 'text-system-blue' : 'text-system-gray'
                                }`}
                        >
                            <div className="mb-0.5">
                                {tab.icon(isActive)}
                            </div>
                            <span className="text-ios-caption2 tracking-tight">
                                {tab.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default TabBar;
