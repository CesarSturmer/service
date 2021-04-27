import styled from 'styled-components'

const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export default SubmitButton