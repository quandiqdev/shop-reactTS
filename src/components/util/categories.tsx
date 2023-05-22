import React, { useState, useEffect } from 'react';
import { ICategory, IProduct } from './interfaces';
import SubHeader from "../subheader/subheader";

const GetCategories: React.FC = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories/?offset=0&limit=5');
            const json = await response.json();
            setCategories(json);
        };
        fetchCategories();
    }, []);

    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    return (
        <SubHeader categories={categories} products={filteredProducts} setFilteredProducts={setFilteredProducts} />
    );
};

export default GetCategories;
