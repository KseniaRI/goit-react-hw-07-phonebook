import styled from '@emotion/styled';

export const Contacts = styled.ul`
margin: 0 auto;
align-items: center;
width: ${p => p.theme.space[9]}px;
`;

export const Contact = styled.li`
display: flex;
justify-content:space-between;
align-items: center;
margin-bottom: ${p => p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`;
export const DeleteButton = styled.button`
height: ${p => p.theme.space[5]}px;
width: ${p => p.theme.space[6]}px;
background-color: ${p => p.theme.colors.white};
cursor: pointer;
outline: none;
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.normal};
border-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.black};

&:hover,
&:focus{
    background-color: skyblue;
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px 0px rgba(0, 0, 0, 0.2);
}
`;

export const Tel = styled.span`
font-weight: ${p => p.theme.fontWeights.normal};
`;