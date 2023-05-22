import { useLocation } from "react-router"
import { ProductsData } from "../util/data/products-data";
import {IProduct} from "../util/interfaces";

export default function ProductItem() {
    const location = useLocation();
    const elem: string = location.pathname.slice(1);
    const product:IProduct =ProductsData()[Number(elem)]

    return (
        <div className="productitem">
            <div className="container">
                <div className="productitem__wrapper">
                    <div className="productitem__img">
                        {product && product.images && product.images.length > 0 && (
                            <img src={product.images[0]} alt="" />
                        )}
                    </div>
                    <div className="productitem__info">
                        <div className="productitem__name">
                            {product && product.title}
                        </div>
                        <div className="productitem__desc">
                            {product && product.description}
                        </div>
                        <div className="productitem__price">
                            Price : {product && product.price}$
                        </div>
                        <button className="productitem__btn">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
