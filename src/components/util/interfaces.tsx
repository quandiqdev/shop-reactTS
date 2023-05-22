import React from "react";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: any[];
    category: ICategory;
    quantity: number;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface IRangeSliderProps {
    value: number[];
    onChange: (event: Event, newValue: number | number[]) => void;
}

export interface IProductsSliderProps {
    value: number[];
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    setValue: (value: [number, number]) => void;
    updateCartItemCount: (count: number) => void;

}

export interface IProductsShow {
    productsShow: IProduct[];
    updateCartItemCount: (count: number) => void;


}

export interface ICartProps {
    updateCartItemCount: (count: number) => void;
}

export interface IPaginationProps {
    handleClick: (pageNumber: number) => void;
    currentPage: number;
    pageNumbers: number[];
    totalPages: number;
}

export interface ICategoriesProps {
    categories: ICategory[];
    products: IProduct[]; // define the type of 'products'
    setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
