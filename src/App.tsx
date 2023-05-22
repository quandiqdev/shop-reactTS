import Header from "./components/header/header";
import "./assets/css/style.css"
import GetCategories from "./components/util/categories";
import AppRoute from "./components/util/routes/route";
import Footer from "./components/footer/footer";
import {useState} from "react";
import {IProduct} from "./components/util/interfaces";
function App() {

    const [cartItemCount, setCartItemCount] = useState(0);

    // Function to update the cart item count
    const updateCartItemCount = (count:number) => {
        setCartItemCount(count);
    };
    return (
        <div>

            <Header cartItemCount={cartItemCount} />
            <GetCategories  />
            <AppRoute  updateCartItemCount={updateCartItemCount}/>
            <Footer />
        </div>
    )
}

export default App;
