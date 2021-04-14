import {Component} from 'react';

import styles from './registrationForm.module.css';

class RegistrationForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    handleSubmit = () => {
        const {onRegistrationSubmit} = this.props;

        onRegistrationSubmit(this.state);
    };

    render() {
        return (
            <form className={styles.registration_form} onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
                e.target.elements.name.value = '';
                e.target.elements.email.value = '';
                e.target.elements.password.value = '';
                }}
            >
                <label className={styles.registration_label} htmlFor="" name="contact">
                    <span className={styles.input_text}>Enter your name</span>
                    <input className={styles.registration_input} type="text" placeholder="name" name="name" onChange={e => {
                    this.handleChange(e);
                }}/>
                </label>
                <label className={styles.registration_label}>
                    <span className={styles.input_text}>Enter your email</span>
                    <input className={styles.registration_input} type="mail" placeholder="email" name="email" onChange={e => {
                    this.handleChange(e);
                }}/>
                </label>
                <label className={styles.registration_label}>
                    <span className={styles.input_text}>Enter your password</span>
                    <input className={styles.registration_input} type="text" placeholder="password" name="password" onChange={e => {
                    this.handleChange(e);
                }}/>
                </label>
                <button className={styles.registration_button} type="submit">Sign Up</button>
            </form>
        );
    }
};

export default RegistrationForm