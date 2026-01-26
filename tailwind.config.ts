import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // iOS 26 System Colors
                systemBlue: '#007AFF',
                systemGray: '#8E8E93',
                systemGray2: '#AEAEB2',
                systemGray3: '#C7C7CC',
                systemGray4: '#D1D1D6',
                systemGray5: '#E5E5EA',
                systemGray6: '#F2F2F7',
                label: '#000000',
                secondaryLabel: 'rgba(60, 60, 67, 0.6)',
                tertiaryLabel: 'rgba(60, 60, 67, 0.3)',
                background: '#FFFFFF',
                secondaryBackground: '#F2F2F7',
                tertiaryBackground: '#FFFFFF',
                separator: 'rgba(60, 60, 67, 0.29)',
            },
            fontFamily: {
                // San Francisco Pro (fallback to system fonts)
                sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            fontSize: {
                // iOS Typography Scale
                'ios-caption2': ['11px', { lineHeight: '13px', fontWeight: '400' }],
                'ios-caption1': ['12px', { lineHeight: '16px', fontWeight: '400' }],
                'ios-footnote': ['13px', { lineHeight: '18px', fontWeight: '400' }],
                'ios-subheadline': ['15px', { lineHeight: '20px', fontWeight: '400' }],
                'ios-callout': ['16px', { lineHeight: '21px', fontWeight: '400' }],
                'ios-body': ['17px', { lineHeight: '22px', fontWeight: '400' }],
                'ios-headline': ['17px', { lineHeight: '22px', fontWeight: '600' }],
                'ios-title3': ['20px', { lineHeight: '25px', fontWeight: '400' }],
                'ios-title2': ['22px', { lineHeight: '28px', fontWeight: '400' }],
                'ios-title1': ['28px', { lineHeight: '34px', fontWeight: '400' }],
                'ios-largeTitle': ['34px', { lineHeight: '41px', fontWeight: '400' }],
            },
            spacing: {
                // iOS Spacing Scale (8pt grid)
                'ios-1': '4px',
                'ios-2': '8px',
                'ios-3': '12px',
                'ios-4': '16px',
                'ios-5': '20px',
                'ios-6': '24px',
                'ios-8': '32px',
                'ios-10': '40px',
                'ios-12': '48px',
            },
            borderRadius: {
                'ios-sm': '8px',
                'ios-md': '10px',
                'ios-lg': '12px',
                'ios-xl': '16px',
                'ios-2xl': '20px',
            },
            backdropBlur: {
                'ios': '20px',
            },
        },
    },
    plugins: [],
};

export default config;
