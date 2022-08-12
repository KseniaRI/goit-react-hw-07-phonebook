import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { toast, Toaster } from 'react-hot-toast';
import { useCreateContactMutation, useFetchContactsQuery } from '../../redux/phonebookSlice';
import { TextInput } from './TextInput';
import { StyledForm, Button, StyledClipLoader } from './PhonebookForm.styled';


const idName = nanoid();
const idPhone = nanoid();
const phonePattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
export const PhonebookForm = () => {

  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

    return (
    <>
    <Formik
          initialValues={{ name: '', phone: '' }}
          validationSchema={Yup.object({
            name: Yup.string().matches(namePattern, 'Insert first name and second name').required('Required'),
            phone: Yup.string().matches(phonePattern, 'Phone number is not valid').required('Required')
          })
          }
          onSubmit={({ name, phone }, { resetForm }) => {
            const contactNames = contacts.map(contact => contact.name);
              
            if (contactNames.includes(name)) {
              toast.error(`${name} is already in contacts`);
            } else {
              createContact({ name, phone });
              resetForm();
              toast.success('The new contact was added');
            }
          }
          }
      >
        <StyledForm autoComplete="off" >
          <TextInput label="Name" name="name" type="text" id={idName} placeholder="Jack Black" />
          <TextInput label="Phone" name="phone" type="tel" id={idPhone} placeholder="123-45-67" />
            <Button type="submit">
              <StyledClipLoader loading={isLoading} size={10} />
              Add contact
            </Button>
            
      </StyledForm>   
        </Formik>
        <Toaster />
    </>
    )
}

PhonebookForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
  )
}