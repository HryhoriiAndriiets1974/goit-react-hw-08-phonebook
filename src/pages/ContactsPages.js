import { Box } from "@mui/material";
import Form from "components/Form";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import css from '../components/App.module.css';

const ContactsPages = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ccffcd"
      paddingBottom="250px"
    >
        <div className={css.wrapper}>
          <h1 className={css.wrapper__title}>Phonebook</h1>
          <Form />
          <h1 className={css.wrapper__title}>Contacts :</h1>
          <Filter  />
            <ContactList />
        </div>
    </Box>
  )
};

export default ContactsPages;
