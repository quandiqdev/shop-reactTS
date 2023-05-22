import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {CategoriesData} from "../data/categories-data";
import React from "react";
import Main from "../../main/main";
import ProductItem from "../../productItem/productItem";
import {ProductsData} from "../data/products-data";
import Cart from "../../cart/cart";
import {ICartProps} from "../interfaces";


function AppRoute({updateCartItemCount}:ICartProps) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main  updateCartItemCount={updateCartItemCount} />}/>
                <Route path="/Cart" element={<Cart updateCartItemCount={updateCartItemCount}/>}/>
                {CategoriesData().map((category) => (
                    <Route path={`/${category.name}/`} key={category.id} element={<Main  updateCartItemCount={updateCartItemCount} />}/>
                ))}
                {ProductsData().map((product) => (
                    <Route path={`/${product.id}/`} key={product.id} element={<ProductItem/>}/>
                ))}
            </Routes>
        </div>
    );
}

export default AppRoute;
