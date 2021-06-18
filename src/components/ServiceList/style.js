import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    color: ${({ theme }) => theme.colors.title};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 30rem 30rem;
`

export const ServiceBox = styled.div`
    width: 25rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TopBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const ServiceTitle = styled.h2`
    width: 100%;
    text-align: center;
`