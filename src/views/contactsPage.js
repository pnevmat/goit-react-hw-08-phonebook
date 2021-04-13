import ContactForm from "../components/ContactForm/ContactForm";
import Filter from '../components/Filter/Filter';
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = (props) => {
    const {onFilterContacts, contacts, filter, foundContacts, onDeleteContact, onStateUpdate} = props;
    return (
        <>
            <ContactForm
                onSubmit={onStateUpdate}
            />
            <Filter
                onChange={onFilterContacts}
            />
            {contacts.length !== 0 &&
                <ContactList
                    foundContacts={foundContacts}
                    state={contacts}
                    filter={filter}
                    onDeleteContact={onDeleteContact}
                />
            }
        </>
    )
};

export default ContactsPage;