import styled from 'styled-components';

const SubmitButton = styled.button`
  width: 22rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 16rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 15rem;
  }
  @media (max-width: 479px) {
    width: 13rem;
  }


`;



export default SubmitButton;
