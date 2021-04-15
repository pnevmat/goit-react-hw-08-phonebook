import axios from "axios";
import logoutActions from '../../actions/AuthorisationActions/loginActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

const registerOperation = () => async dispatch => {
    dispatch(logoutActions.logoutRequest());

    try {
        await axios.post('/users/logout');

        token.unset();
        dispatch(logoutActions.logoutSuccess());
    }catch(error) {
        dispatch(logoutActions.logoutError(error.message));
    };
};

export default registerOperation;