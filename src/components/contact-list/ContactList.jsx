import PropTypes from 'prop-types';
import { useFetchContactsQuery } from '../../redux/phonebookSlice';
// import { getVisibleContacts } from 'redux/phonebookSelectors';
import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import  ClipLoader from 'react-spinners/ClipLoader';



export const ContactList = () => {
    const { data: contacts, isFetching } = useFetchContactsQuery();
    if (contacts) {
       return (
        <Contacts>
               <ClipLoader loading={isFetching} size={50} />
               {contacts.map(({ name, phone, id }) => <ContactItem key={id} id={id} name={name} phone={phone} />) }
        </Contacts>
    ); 
    }
    
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}