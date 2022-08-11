import { SecondaryTitle } from "./SectionTitle.styled";
import PropTypes from 'prop-types';

export const SectionTitle = ({ title }) => <SecondaryTitle>{title}</SecondaryTitle>;

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}