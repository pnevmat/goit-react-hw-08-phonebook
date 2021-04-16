import AutorisationNav from './autorisationNav';
import LogoutContainer from '../../redux/containers/logoutContainer';

const Header = (props) => {
    const {authorisation, userName} = props;
    return (
        <>
            {authorisation ? <LogoutContainer userName={userName} /> : <AutorisationNav />}
        </>
    );
};

export default Header;