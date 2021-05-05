import styled from 'styled-components'

const SubmitButton = styled.button`
    width: 80%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export default SubmitButton