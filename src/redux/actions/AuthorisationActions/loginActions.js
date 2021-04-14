import {createAction} from '@reduxjs/toolkit';

const loginRequest = createAction('authorisation/registerRequest');
const loginSuccess = createAction('authorisation/registerSuccess');
const loginError = createAction('authorisation/registerError');

export default {loginRequest, loginSuccess, loginError};