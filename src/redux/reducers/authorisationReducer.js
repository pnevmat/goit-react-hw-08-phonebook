import {createReducer} from '@reduxjs/toolkit';

import registerActions from '../actions/AuthorisationActions/registerActions';
import loginActions from '../actions/AuthorisationActions/loginActions';

const authorisationReducer = createReducer([], {
    [registerActions.registerSuccess]: (_, {payload}) => payload.user,
    [registerActions.registerError]: (_, {payload}) => payload,
    [loginActions.loginSuccess]: (_, {payload}) => payload.user,
    [loginActions.loginError]: (_, {payload}) => payload
});

const tokenReducer = createReducer([], {
    [registerActions.registerSuccess]: (_, {payload}) => payload.token,
    [loginActions.loginSuccess]: (_, {payload}) => payload.token,
});

export default {authorisationReducer, tokenReducer};