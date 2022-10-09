import { NavLink } from "react-router-dom";
import { initialDecks } from "../../mockdata/CardData";

const Navbar = () => {
    const decks = initialDecks;

    return (
        <div className="navbar">
            <div className="navbar-menu">
                <NavLink
                    to={`/store`}
                    activeClassName="is-selected"
                    className="navbar-item"
                >
                    Shop
                </NavLink>
                {decks.map((deck, i) => {
                    return (
                        <NavLink
                            to={`/deck/${i}`}
                            className="navbar-item"
                            activeClassName="is-selected"
                            key={i}
                        >
                            {deck.name}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;