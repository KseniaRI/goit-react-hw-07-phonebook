import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getFilter } from 'redux/phonebookSelectors';

// import * as phonebookActions from '../../redux/phonebookActions';
import { filterSlice } from 'redux/phonebookSlice';

import { FilterTitle, FilterInput } from './Filter.styled';
import { Box } from 'components/Box';

const filterId = nanoid();

export const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <Box as="div"
        display="flex"
        flexDirection="column"
        alignItems="center">
            <FilterTitle htmlFor={filterId}>Find Contacts by name</FilterTitle>
            <FilterInput type="text" value={value}
                // onChange={(evt) => dispatch(phonebookActions.changeFilter(evt.target.value))}
                onChange={(evt) => dispatch(filterSlice.actions.changeFilter(evt.target.value))}
                id={filterId} />
        </Box>
    );
}
   