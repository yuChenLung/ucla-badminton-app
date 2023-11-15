import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/reservation">Court Reservation</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
