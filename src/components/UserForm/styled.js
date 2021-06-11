import styled from 'styled-components'

export const TwoInputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const OptionButton = styled.button`
  width: 13rem;
  align-self: center;
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
