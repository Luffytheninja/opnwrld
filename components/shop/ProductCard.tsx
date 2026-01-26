import React from 'react';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link href={`/shop/${product.id}`} className="group flex flex-col space-y-2 active:opacity-80 transition-opacity">
            <div className="relative aspect-[3/4] overflow-hidden rounded-ios-xl bg-system-gray-6 dark:bg-system-gray-5/10">
                <div className="absolute inset-0 flex items-center justify-center text-system-gray">
                    <div className="w-full h-full bg-gradient-to-br from-system-gray-4/20 to-system-gray-6/40 flex items-center justify-center">
                        <span className="text-ios-caption1 uppercase tracking-widest font-bold opacity-50">{product.category}</span>
                    </div>
                </div>
            </div>
            <div className="px-1">
                <h3 className="text-ios-subheadline font-medium line-clamp-1">{product.name}</h3>
                <p className="text-ios-footnote text-system-gray font-semibold">{product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
