import LoginForm from "../components/LoginForm/loginForm"

const LoginPage = (props) => {
    const {onLoginSubmit} = props;
    return (
        <>
            <h3>Login Form</h3>
            <LoginForm 
                onLoginSubmit={onLoginSubmit}
            />
        </>
    )
};

export default LoginPage;