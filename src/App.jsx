import { PageTitle } from './components/page-title/PageTitle';
import { PhonebookForm } from './components/phonebook-form/PhonebokForm';
import { SectionTitle } from './components/section-title/SectionTitle';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contact-list/ContactList';
import { Box } from 'components/Box';

export const App = () => {
    return (
      <Box as="div"
        p="6"
       >
      <PageTitle title="Phonebook" />
      <PhonebookForm /> 
      <SectionTitle title="Contacts"/>
      <Filter/>
      <ContactList />
    </Box>
    )
}


 
  
  
