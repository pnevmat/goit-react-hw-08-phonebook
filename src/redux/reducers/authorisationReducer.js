import {createReducer} from '@reduxjs/toolkit';

import registerActions from '../actions/AuthorisationActions/registerActions';
import loginActions from '../actions/AuthorisationActions/loginActions';
import logoutActions from '../actions/AuthorisationActions/logoutActions';

const authorisationInitialState = {};

const authorisationReducer = createReducer(authorisationInitialState, {
    [registerActions.registerSuccess]: (_, {payload}) => payload.user,
    [registerActions.registerError]: (_, {payload}) => payload,
    [loginActions.loginSuccess]: (_, {payload}) => payload.user,
    [loginActions.loginError]: (_, {payload}) => payload,
    [logoutActions.logoutSuccess]: (_, __) => [],
    [logoutActions.logoutError]: (_, {payload}) => payload
});

const tokenInitialState = null;

const tokenReducer = createReducer(tokenInitialState, {
    [registerActions.registerSuccess]: (_, {payload}) => payload.token,
    [loginActions.loginSuccess]: (_, {payload}) => payload.token,
    [logoutActions.logoutSuccess]: (_, __) => null,
});

export default {authorisationReducer, tokenReducer};