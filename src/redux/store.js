import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';
import authorisationReducers from './reducers/authorisationReducer'

import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        userData: authorisationReducers.authorisationReducer,
        userToken: authorisationReducers.tokenReducer
    },
    middleware: [
        ...getDefaultMiddleware(),
        logger
    ],
    devTools: process.env.NODE_ENV === 'development'
});

export default store;