import PropTypes from 'prop-types';
import { useFetchContactsQuery } from '../../redux/phonebookSlice';
import { Contacts, ListClipLoader } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useSelector} from 'react-redux';
import { getFilter } from 'redux/phonebookSelectors';



export const ContactList = () => {

    const getVisibleContacts = (value, contacts) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));  
    }

    const { data: contacts, isFetching } = useFetchContactsQuery();
    const value = useSelector(getFilter);
    let visibleContacts = null;
    if (contacts) {
        visibleContacts = getVisibleContacts(value, contacts);
    }
       return (
        <Contacts>
               <ListClipLoader loading={isFetching} size={50} />
               {visibleContacts && visibleContacts.map(({ name, phone, id }) => <ContactItem key={id} id={id} name={name} phone={phone} />) }
        </Contacts>
    ); 
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}