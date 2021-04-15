import { NavLink } from "react-router-dom";

const UserMenu = (props) => {
    const {userName} = props;
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
            <div>
                <p>Welcome, {userName}</p>
                <button type='button'>Logout</button>
            </div>
        </>
    );
};

export default UserMenu;