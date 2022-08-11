import styled from '@emotion/styled';

export const FilterTitle = styled.label`
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
text-transform: uppercase;
margin-bottom: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.black};
`;

export const FilterInput = styled.input`
width: ${p => p.theme.space[8]}px;
height: ${p => p.theme.space[5]}px;
margin-bottom: ${p => p.theme.space[5]}px;

&:hover,
&:focus{
    outline-color: ${p => p.theme.colors.accent};
}
`;