import React, {useState, useEffect, useMemo} from "react";
import {IProduct, IProductsSliderProps} from "../util/interfaces";
import Content from "./content/content";
import Pagination from "./pagination/pagination";
import {useLocation} from "react-router";
import {CategoriesData} from "../util/data/categories-data";

const Products = ({value, searchQuery, setSearchQuery, setValue,updateCartItemCount}: IProductsSliderProps) => {
    //Getting Data of Products
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=120')
            .then(response => response.json())
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    //variables to pagination
    const productsPerPage: number = 9;
    const [currentPage, setCurrentPage] = useState(1);

    //filter by categories
    const location = useLocation();
    const [routeName, setRouteName] = useState(location.pathname);
    const categories = CategoriesData();

    // Filter products by category
    const filteredByCategories: IProduct[] = []
    products.forEach((product) => {
        categories.forEach((cat)=>{
            if (routeName == '/'+cat.name && product.category.id==cat.id) {
                // Check
                if (!filteredByCategories.some(p => p.id === product.id)) {
                    filteredByCategories.push(product);
                }
            }
            else if(routeName=='/'){
                // Check re
                if (!filteredByCategories.some(p => p.id === product.id)) {
                    filteredByCategories.push(product);
                }
            }
        })
    })

    // sort by price [1-1000] use-memo for re-render
    const filteredProducts = useMemo(() => {
        const filtered = filteredByCategories.filter((product) => {
            if (product.price <= value[1] && product.price >= value[0]) {
                return true;
            }
            return false;
        });

        const sorted = filtered.sort((a, b) => a.price - b.price);

        if (searchQuery) {
            return sorted.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return sorted;
    }, [products, value, filteredByCategories, searchQuery]);




    // Update filtered when route change


    useEffect(() => {
        setRouteName(location.pathname);
        setSearchQuery("");
    }, [location.pathname]);

    useEffect(() => {
        setValue([1, 1000]);
        setSearchQuery("");
    }, [routeName]);



    //variables for pagination
    const endIndex = currentPage * productsPerPage;
    const startIndex = endIndex - productsPerPage;

    const productsShow = filteredProducts.slice(startIndex, endIndex)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
    const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);


    //function for checking current page
    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div>
            <Content updateCartItemCount={updateCartItemCount} productsShow={productsShow}/>
            <Pagination handleClick={handleClick} currentPage={currentPage} pageNumbers={pageNumbers}
                        totalPages={totalPages}/>
        </div>
    );
};

export default Products;
