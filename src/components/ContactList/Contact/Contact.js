import PropTypes from 'prop-types';
import {useDelContactMutation} from '../../../redux/contactsApi';
import css from './Contact.module.css';

const Contact = ({id, name, number}) => {
  const [delContact] = useDelContactMutation();

  const handleDelContact = async id => {
    await delContact(id).unwrap();
  }
  return (
    <>
        <p className={css.contacts__name}>
            {name} : ...
        <span className={css.contacts__number}>
            {number}
        </span>
        </p>
        <button
          className={css.contacts__btn}
          type="button"
          onClick={() => handleDelContact(id)}
        >
          Delete
        </button>
    </>

  )
}

Contact.propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
};

export default Contact;
