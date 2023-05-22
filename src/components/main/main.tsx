import Products from "../products/products";
import * as React from 'react';
import RangeSlider from "../util/doubleSlider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import products from "../products/products";
import {ICartProps} from "../util/interfaces";

export default function Main({updateCartItemCount}:ICartProps) {

    //Multi-slider code
    const [value, setValue] = React.useState<number[]>([1, 1000]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const [searchQuery, setSearchQuery] = useState("");




    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="filter">
                        <div className="filter__wrapper">
                            <div className="filter__search">
                                <input
                                    type="search"
                                    className="filter__search-input"
                                    placeholder="Search product..."
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                />

                                <span className='filter__search-icon'><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                            </div>
                            <div className="filter__title">
                                Sort products by price
                            </div>
                            <RangeSlider value={value} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content__wrapper">
                            <Products updateCartItemCount={updateCartItemCount} setValue={setValue} setSearchQuery={setSearchQuery} value={value} searchQuery={searchQuery}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}