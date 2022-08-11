import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledField = styled.input`
width: ${p => p.theme.space[8]}px;
height: ${p => p.theme.space[5]}px;

&:hover,
&:focus{
    outline-color: ${p => p.theme.colors.accent};
}
`;

export const StyledForm = styled(Form)`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${p => p.theme.colors.white};
width: ${p => p.theme.space[9]}px;
height: ${p => p.theme.space[8]}px;
padding: ${p => p.theme.space[4]}px;
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.radii.normal};
margin-bottom: ${p => p.theme.space[6]}px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px 0px rgba(0, 0, 0, 0.2); 
`;

export const Label = styled.label`
margin-bottom: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.black};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};

&:not(:first-of-type){
    margin-top: ${p => p.theme.space[5]}px;
}
`;

export const Button = styled.button`
width: ${p => p.theme.space[7]}px;
height: ${p => p.theme.space[5]}px;
margin: 0 auto;
margin-top: ${p => p.theme.space[5]}px;
background-color: ${p => p.theme.colors.white};
cursor: pointer;
outline: none;
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.normal};
border-color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.m};
color: ${p => p.theme.colors.black};
font-weight: ${p => p.theme.fontWeights.bold};

&:hover,
&:focus{
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px 0px rgba(0, 0, 0, 0.2);
}
`;

export const ErrorMessage = styled.div`
color: ${p => p.theme.colors.error};
font-style: italic;
`