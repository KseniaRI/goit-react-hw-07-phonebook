export const getItems = state => state.phonebook.items;
export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = state => {
    const allContacts = getItems(state);
    const filter = getFilter(state);
    return allContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };