import Link from 'next/link';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
`;

const LoginButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
  width: 140px;
  height: 40px;
`;

const ButtonsHeader = ({to, text, buttonSign }) => {
    return (
        <ButtonsContainer style={
          buttonSign && {backgroundColor: 'none',width: '17.438rem', marginRight: '1rem', padding: '1rem',}
        }>
            <Link href={to}>
            <LoginButton>
              {text}
            </LoginButton>              
            </Link>
        </ButtonsContainer>
    )
}


         
      

export default ButtonsHeader