import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 70%;
  }

`;

export const TopContainer = styled.div`
    position: relative;
    top: -5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Photo = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: ${({ theme }) => theme.borderRadius.max};
`

export const PhotInput = styled.input`
    display: none;
`

export const InputLabel = styled.label`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 10rem;
    height: 10rem;
    border-radius: ${({ theme }) => theme.borderRadius.max};
`

export const EditInputLabel = styled.label`
    height: 10rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LabelText = styled.p`
    margin: 0;
`