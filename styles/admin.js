import styled from 'styled-components'

export const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    height: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
`

export const MenuButton = styled.p`
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    margin: 2rem 0;
    cursor: pointer;
`

export const List = styled.ul`
    color: ${({ theme }) => theme.colors.secondary};
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
`

export const ListItem = styled.li`
    margin-left: 0.5rem;
`