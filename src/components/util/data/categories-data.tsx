import { useEffect, useState } from 'react';
import { ICategory } from '../interfaces';

export const CategoriesData = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const json = await response.json();
            setCategories(json);
        };
        fetchCategories();
    }, []);

    return categories;
};
