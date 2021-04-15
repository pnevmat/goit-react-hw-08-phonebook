import AutorisationNav from './autorisationNav';
import UserMenu from './userMenu';

const Header = (props) => {
    const {authorisation, userName} = props;
    return (
        <>
            {authorisation ? <UserMenu userName={userName} /> : <AutorisationNav />}
        </>
    );
};

export default Header;