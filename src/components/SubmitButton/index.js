import styled from 'styled-components'

const SubmitButton = styled.button`
    width: 22rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    border: none;
`

export default SubmitButton