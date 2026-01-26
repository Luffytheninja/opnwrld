import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'plain';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all active:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-systemBlue text-white rounded-ios-lg",
        secondary: "bg-systemGray5 dark:bg-systemGray6 text-systemBlue rounded-ios-lg",
        plain: "text-systemBlue p-0",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-ios-footnote",
        md: "px-4 py-2.5 text-ios-subheadline",
        lg: "px-6 py-3.5 text-ios-body w-full",
    };

    return (
        <button
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
