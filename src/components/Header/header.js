import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Contacts</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/register'>Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Log In</NavLink>
                </li>
            </ul>
        </>
    );
};

export default Header;