import styled from 'styled-components'
import Link from 'next/link';
import {RiFacebookCircleFill, RiMailLine, RiPhoneLine} from 'react-icons/ri'

const FooterContainer = styled.footer`
    width: 100vw;
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
`

const IconsContainer = styled.div`
    width: 10rem;
    display: flex;
    font-size: 2.5rem;
    justify-content: space-around;
    margin-top: 2rem;
`

const TextContainer = styled.ul`
    font-size: 1.5rem;
    display: flex;
    margin-bottom: 5rem;
`

const TextItem = styled.li`
    margin-left: 2rem;
    cursor: pointer;
    &:first-child {
        list-style: none;
        margin-left: 0;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <IconsContainer>
                <RiFacebookCircleFill />
                <RiMailLine />
                <RiPhoneLine />
            </IconsContainer>
            <TextContainer>
                <Link href='/'>
                    <TextItem>Home</TextItem>
                </Link>
                <Link href='/'>
                    <TextItem>Sobre nós</TextItem>
                </Link>
                <Link href='/serviceSearch'>
                    <TextItem>Seu local</TextItem>
                </Link>
            </TextContainer>
        </FooterContainer>
    )
}

export default Footer