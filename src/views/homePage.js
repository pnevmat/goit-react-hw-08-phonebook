import Header from '../components/Header/header';


const HomePage = (props) => {
    const {userName, authorisation} = props;
    return (
        <>
            <Header 
                userName={userName}
                authorisation={authorisation}
            />
        </>
    )
};

export default HomePage;