import Contact from './Contact';
import Loader from 'components/Loader';
import {useGetContactsApiQuery} from '../../redux/contactsApi';
import { useFilter } from 'hooks/hookFilter';
import css from './ContactList.module.css';

const ContactList = () => {
  const {filter} = useFilter();
  const {data: contacts, isLoading} = useGetContactsApiQuery();

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ));
  };

  const filterRez = filterContacts();

  return (
    <>
      {isLoading && <Loader />}
        <ul className={css.contacts}>
          { contacts && !isLoading && filterRez.length > 0
            ? (
                filterRez.map(({id, name, number}) => (
                  <li key={id} className={css.contacts__item}>
                    <Contact
                      id={id}
                      name={name}
                      number={number}
                    />
                  </li>
              ))
          ) : (
            <p className={css.contacts__message}>Your phonebook is empty !!!</p>
          )
          }
        </ul>
    </>
  )
}


export default ContactList;
