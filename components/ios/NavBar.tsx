"use client";

import React from 'react';

interface NavBarProps {
    title: string;
    largeTitle?: boolean;
    rightElement?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ title, largeTitle = true, rightElement }) => {
    return (
        <header className="sticky top-0 z-40 w-full glass border-b border-separator safe-top">
            {/* Standard NavBar */}
            <div className="flex items-center justify-between h-11 px-4">
                <div className="w-1/4">
                    {/* Back button or left element could go here */}
                </div>
                <div className={`transition-opacity duration-200 ${largeTitle ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className="text-ios-headline text-center">{title}</h1>
                </div>
                <div className="w-1/4 flex justify-end">
                    {rightElement}
                </div>
            </div>

            {/* Large Title support (Native feel) */}
            {largeTitle && (
                <div className="px-4 pb-2 pt-1 bg-transparent">
                    <h1 className="text-ios-largeTitle font-bold tracking-tight">{title}</h1>
                </div>
            )}
        </header>
    );
};

export default NavBar;
