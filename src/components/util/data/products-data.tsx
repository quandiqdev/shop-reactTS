import { useEffect, useState } from 'react';
import { IProduct } from '../interfaces';

export const ProductsData = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const json = await response.json();
            setProducts(json);
        };
        fetchProducts();
    }, []);

    return products;
};
