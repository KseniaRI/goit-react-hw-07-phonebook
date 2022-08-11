import { Contact, DeleteButton, Tel, StyledClipLoader} from './ContactList.styled';
import { useDeleteContactMutation } from '../../redux/phonebookSlice';


export const ContactItem = ({ id, name, phone }) => {
     const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    return (
    <Contact>{name}: <Tel>{phone}</Tel>
            <DeleteButton type="button" onClick={() => deleteContact(id)} disabled={isDeleting}>
                <StyledClipLoader loading={isDeleting} size={10} />   
                Delete
            </DeleteButton>
    </Contact>
)
}