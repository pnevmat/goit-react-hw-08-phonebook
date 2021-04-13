import axios from 'axios';
import actions from '../actions/didMountStoreUpdate';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const onStoreUpdate = text => dispatch => {

    dispatch(actions.updateStoreRequest());

    axios.get('/contacts')
    .then(({data}) => {
        return dispatch(actions.updateStoreSuccess(data))})
    .catch(error => {
        return dispatch(actions.updateStoreError(error))})
}

export default onStoreUpdate;