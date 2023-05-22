import {ICategoriesProps} from "../util/interfaces";
import {Link} from "react-router-dom";

export default function SubHeader(props: ICategoriesProps) {


    return (
        <div className="subheader">
            <div className="container">
                <div className="subheader__wrapper">
                    <ul className="subheader__list">
                        <li className="subheader__list-item" key="all">
                            <Link to="/" className="subheader__list-link">
                                All
                            </Link>
                        </li>
                        {props.categories.map((category) => (
                            <li className="subheader__list-item" key={category.id}>
                                <Link to={`/${category.name}`} className="subheader__list-link">
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
