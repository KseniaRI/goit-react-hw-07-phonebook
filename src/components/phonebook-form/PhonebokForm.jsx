import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { getItems } from 'redux/phonebookSelectors';

// import * as phonebookActions from '../../redux/phonebookActions';
import { itemsSlice } from 'redux/phonebookSlice';

import { TextInput } from './TextInput';
import { StyledForm, Button } from './PhonebookForm.styled';

const idName = nanoid();
const idNumber = nanoid();
const phonePattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const PhonebookForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();

    return (
    <>
    <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={Yup.object({
            name: Yup.string().matches(namePattern, 'Insert first name and second name').required('Required'),
            number: Yup.string().matches(phonePattern, 'Phone number is not valid').required('Required')
        })
        } 
        onSubmit={({ name, number }, { resetForm }) => {
          const contactNames = items.map(item => item.name);
              
          if (contactNames.includes(name)) {
            alert(`${name} is already in contacts`);
          } else {
            const newContact = { name, number };
            // dispatch(phonebookActions.saveContact(newContact));
            dispatch(itemsSlice.actions.saveContact(newContact));
          }
          resetForm();
  }}
      >
        <StyledForm autoComplete="off" >
          <TextInput label="Name" name="name" type="text" id={idName} placeholder="Jack Black" />
          <TextInput label="Number" name="number" type="tel" id={idNumber} placeholder="123-45-67" />
        <Button type="submit">Add contact</Button>
      </StyledForm>   
    </Formik>
    </>
    )
}

PhonebookForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
  )
}