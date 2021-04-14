import RegistrationForm from "../components/RegistrationForm/registrationForm"

const RegisterPage = (props) => {
    const {onRegistrationSubmit} = props;
    return (
        <>
            <h3>Sign Up Form</h3>
            <RegistrationForm 
                onRegistrationSubmit={onRegistrationSubmit}
            />
        </>
    )
};

export default RegisterPage;