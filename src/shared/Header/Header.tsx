import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;
margin:auto;
&:hover {
  color:red;
}
`
const HeaderContainer= styled.header`
display:flex;
flex-direction:row;

`

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to='/'>
        <h1>Hr Tools</h1>
      </StyledLink>

      {/* <LanguageSwitcher /> */}
    </HeaderContainer>
  );
};
