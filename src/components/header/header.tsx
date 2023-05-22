import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
    cartItemCount: number;
}

export default function Header({ cartItemCount }: HeaderProps) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link to="/" className="header__list-link">
                                Home
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/about" className="header__list-link">
                                About
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/services" className="header__list-link">
                                Services
                            </Link>
                        </li>
                    </ul>
                    <div className="header__end">
                        <div className="header__end-cart cart-icon">
                            <Link to="/Cart">
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="cart__icon"
                                    style={{ color: "#383b47" }}
                                />
                                {cartItemCount >0  ?    <span className="header__end-dataCount">{cartItemCount}</span> : "" }

                            </Link>
                        </div>
                        <div className="header__end-user user-icon">
                            <div className="user__logo">
                                <img src="" alt="" />
                            </div>
                            <div className="user__name">Username</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
