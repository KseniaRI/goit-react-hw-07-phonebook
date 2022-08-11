import { MainTitle } from "./PageTitle.styled";
import PropTypes from 'prop-types';

export const PageTitle = ({ title }) => <MainTitle>{title}</MainTitle>;

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}