import { NavLink } from "react-router-dom"


const HomePage = () => {
    return (
        <section>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/register'>Sign Up</NavLink>
            <NavLink to='/login'>Sign In</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
        </section>
    )
};

export default HomePage;