import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { IProduct, IProductsShow } from "../../util/interfaces";
import { Link } from "react-router-dom";

export default function Content({ productsShow ,updateCartItemCount}: IProductsShow) {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    updateCartItemCount(cartItems.length);

    useEffect(() => {
        const _lsData = JSON.parse(localStorage.getItem("cartItems") as string) ?? [];
        setCartItems(_lsData);
    }, []);

    const addCart = (productID: number) => {
        const selectedProduct = productsShow.find((product) => product.id === productID);
        if (selectedProduct && !cartItems.some((item) => item.id === selectedProduct.id)) {
            const updatedCartItems: IProduct[] = [
                ...cartItems,
                { ...selectedProduct, quantity: 1 },
            ];
            setCartItems(updatedCartItems);
            updateLocalStorage(updatedCartItems);
            updateCartItemCount(updatedCartItems.length);
        }
    };

    const updateLocalStorage = (items: IProduct[]) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    return (
        <ul className="content__list">
            {productsShow.map((product) => (
                <li className="content__list-item item" key={product.id}>
                    <div className="item__wrapper">
                        <Link to={`/${product.id}`}>
                            <div className="item__img">
                                <img src={product.images[0]} alt="item-img" />
                            </div>
                        </Link>
                        <div className="item__wrapper-inner">
                            <Link to={`/${product.id}`}>
                                <div className="item__name">{product.title}</div>
                            </Link>
                            <div className="item__price">{product.price}$</div>
                        </div>
                        <div className="item__bottom">
                            <div className="item__bottom-btn">
                                <Link to={`/${product.id}`}>
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            className="item__btn"
                                            style={{ color: "#ffffff" }}
                                        />
                                    </button>
                                </Link>
                                <Link to="#">
                                    <button key={product.id} onClick={() => addCart(product.id)}>
                                        <FontAwesomeIcon
                                            icon={faBagShopping}
                                            className="item__btn"
                                            style={{ color: "#ffffff" }}
                                        />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
