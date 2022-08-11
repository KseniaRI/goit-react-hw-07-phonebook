import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// import * as phonebookActions from '../../redux/phonebookActions';
import { itemsSlice } from 'redux/phonebookSlice';

import { getVisibleContacts } from 'redux/phonebookSelectors';
import { Contacts, Contact, DeleteButton, Tel } from './ContactList.styled';



export const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    return (
        <Contacts>
            {contacts.map(({ id, name, number }) => { 
                
                return (
                        <Contact key={id}>{name}: <Tel>{number}</Tel>
                            <DeleteButton id={id} type="button" onClick={(evt) => dispatch(itemsSlice.actions.deleteContact(evt.target.id))}>Delete</DeleteButton>
                                {/* // onClick={(evt) => dispatch(phonebookActions.deleteContact(evt.target.id))} */}
                        </Contact>
                )
            }
            )}
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