import styled from 'styled-components';

export const Container = styled.div`
    width: 50rem;
    color: ${({ theme }) => theme.colors.title};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const AvaliationBox = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
`

export const AvaliationContainer = styled.div`
    width: 90%;
`

export const AvaliatorName = styled.p`
    position: relative;
    bottom: -3.5rem;
    align-self: flex-start;
    font-size: 0.5rem;
`

export const Avaliation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.title};
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    align-self: flex-end;
`