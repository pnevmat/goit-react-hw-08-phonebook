import React, {Component, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';

import getUserDataOperation from './redux/operations/AuthorisationOperations/getUserDataOperation';

// import HomePageContainer from './redux/containers/homePageContainer';
// import RegistrationContainer from './redux/containers/registrationContainer';
// import LoginContainer from './redux/containers/loginContainer';
// import ContactsPageContainer from './redux/containers/contactsPageContainer';

// import ContactForm from './components/ContactsPage/ContactForm/ContactForm';
// import Filter from './components/ContactsPage/Filter/Filter';
// import ContactList from './components/ContactsPage/ContactList/ContactList';

import './App.css';

const HomePageContainer = lazy(() => import('./redux/containers/homePageContainer'));
const RegistrationContainer = lazy(() => import('./redux/containers/registrationContainer'));
const LoginContainer = lazy(() => import('./redux/containers/loginContainer'));
const ContactsPageContainer = lazy(() => import('./redux/containers/contactsPageContainer'));

class PhoneBook extends Component {

  componentDidMount() {
    this.props.ongetUserData()
  }

  // onStateUpdate = (obj) => {
  //   const {onAddContact} = this.props;

  //   if (this.props.contacts.find(contact => contact.name === obj.name)) {
  //     alert(`${obj.name}is alredy in contacts`);

  //   } else {
  //     onAddContact(obj);
  //   };
  // };

  render() {
    // const {onFilterContacts, contacts, filter, foundContacts, onDeleteContact} = this.props;
    return (
      <Suspense fallback={<p>Загружаем...</p>} >
        <section className="section">
          <Switch>
            <Route exact path='/' render={(props) => <HomePageContainer {...props} />} />
            <Route path='/register' render={(props) => <RegistrationContainer {...props} />} />
            <PublicRoute path='/login' restricted component={LoginContainer} redirectTo='/contacts' />
            <PrivateRoute path='/contacts' component={ContactsPageContainer} redirectTo='/login' />
          </Switch>
        </section>
      </Suspense>
    )
  };
};

const mapDispatchToProps = {
  ongetUserData: getUserDataOperation,
}

export default connect(null, mapDispatchToProps)(PhoneBook);