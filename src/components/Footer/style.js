import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100px 100px 0 0;
  margin-top: 2rem;
`;

export const IconsContainer = styled.div`
  width: 10rem;
  display: flex;
  font-size: 2.5rem;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const TextContainer = styled.ul`
  font-size: 1.5rem;
  display: flex;
  margin-bottom: 5rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.25rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.25rem;
  }
  @media (max-width: 479px) {
    font-size: 1rem;
  }
`;

export const TextItem = styled.li`
  margin-left: 2rem;
  cursor: pointer;
  &:first-child {
    list-style: none;
    margin-left: 0;
  }
`;