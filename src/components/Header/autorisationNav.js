import { NavLink } from "react-router-dom";

const AutorisationNav = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
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

export default AutorisationNav;