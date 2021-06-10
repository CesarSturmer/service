import styled from 'styled-components'

export const Box = styled.div`
    width: 22rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    cursor: pointer;
`

export const Photo = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: ${({ theme }) => theme.borderRadius.max};
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const Title = styled.p`
    font-weight: bold;
    margin: 0;
`