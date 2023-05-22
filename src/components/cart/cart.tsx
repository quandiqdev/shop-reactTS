import {Link} from "react-router-dom";
import React from "react";
import {ICartProps, IProduct} from "../util/interfaces";
import alert from "../util/alert";
export default function Cart({updateCartItemCount}: ICartProps) {
    const _lsData = JSON.parse(localStorage.getItem('cartItems') as string);
    const [cartItems, setCartItems] = React.useState<IProduct[]>(_lsData);

    function handleRemove(index: number) {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        updateLocalStorage(newCartItems);
        updateCartItemCount(cartItems.length);
    }

    function handleQuantityChange(index: number, newQuantity: number) {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = newQuantity;
        setCartItems(newCartItems);
        updateLocalStorage(newCartItems);
        updateCartItemCount(cartItems.length);
    }

    function updateLocalStorage(items: IProduct[]) {
        localStorage.setItem("cartItems", JSON.stringify(items));
    }

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    updateCartItemCount(cartItems.length);
    return (
        <div className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    <div className="cart__title">Ваша корзина</div>
                    <ul className="cart__list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart__item">
                                <div className="cart__item-left">
                                    <div className="cart__item-img">
                                        <img src={item.images[0]} alt=""/>
                                    </div>
                                    <div className="cart__item-left-wrapper">
                                        <div className="cart__item-name">{item.title}</div>
                                        <div className="cart__item-price">{item.price}$ за шт.</div>
                                    </div>
                                </div>
                                <div className="cart__item-right">
                                    <div className="cart__item-btns">
                                        <button
                                            className="cart__item-minus"
                                            onClick={() =>
                                                item.quantity < 2 ? handleRemove(index) :
                                                    handleQuantityChange(index, item.quantity - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <div className="cart__item-amount">{item.quantity}</div>
                                        <button
                                            className="cart__item-plus"
                                            onClick={() =>
                                                handleQuantityChange(index, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="cart__item-info">
                                        <div className="cart__item-price cart__item-price-right">
                                            {item.price * item.quantity}$
                                        </div>
                                        <div
                                            className="cart__item-remove"
                                            onClick={() => handleRemove(index)}
                                        >
                                            Удалить
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart__price">
                        <div className="cart__price-title">Итого:</div>
                        <div className="cart__price-overall">{totalPrice}$</div>
                        <Link to="/checkout" className="cart__price-btn">
                            Оформить заказ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}