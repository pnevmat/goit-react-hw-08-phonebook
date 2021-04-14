import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './views/homePage';
import RegistrationContainer from './redux/containers/registrationContainer';
import LoginContainer from './redux/containers/loginContainer';
import ContactsPageContainer from './redux/containers/contactsPageContainer';
// import ContactForm from './components/ContactsPage/ContactForm/ContactForm';
// import Filter from './components/ContactsPage/Filter/Filter';
// import ContactList from './components/ContactsPage/ContactList/ContactList';

import './App.css';

class PhoneBook extends Component {

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
            <Route exact path='/' component={HomePage} />
            <Route path='/register' render={(props) => <RegistrationContainer {...props} />} />
            <Route path='/login' render={(props) => <LoginContainer {...props} />} />
            <Route path='/contacts' render={(props) => <ContactsPageContainer {...props} />}/>
          </Switch>
        </section>
      </Suspense>
    )
  };
};

export default PhoneBook;