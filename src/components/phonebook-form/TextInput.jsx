import { useField } from 'formik';
import { StyledField, Label, ErrorMessage} from './PhonebookForm.styled';

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name} >{label}</Label>
      <StyledField {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};