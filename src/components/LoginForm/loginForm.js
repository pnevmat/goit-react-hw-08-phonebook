import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './loginForm.module.css';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    handleSubmit = () => {
        const {onLoginSubmit} = this.props;

        onLoginSubmit(this.state);
    };

    render() {
        return (
            <form className={styles.login_form} onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
                e.target.elements.email.value = '';
                e.target.elements.password.value = '';
                }}
            >
                <label className={styles.login_label} htmlFor="" name="contact">
                    <span className={styles.input_text}>Enter your Login</span>
                    <input className={styles.login_input} type="mail" placeholder="email" name="email" onChange={e => {
                    this.handleChange(e);
                }}/>
                </label>
                <label className={styles.login_label}>
                    <span className={styles.input_text}>Enter your password</span>
                    <input className={styles.login_input} type="text" placeholder="password" name="password" onChange={e => {
                    this.handleChange(e);
                }}/>
                </label>
                <button className={styles.login_button} type="submit">Log In</button>
            </form>
        );
    };
};

export default LoginForm;

LoginForm.propTypes = {
    onLoginSubmit: PropTypes.func.isRequired,
};