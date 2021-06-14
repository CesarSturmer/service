import Link from 'next/link'
import styled from 'styled-components'

const UserAction = styled.div `
  display: flex;
  background: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1rem;
`

const ModalUserActions = ({userProfile, handleLogout}) => {

    const link = userProfile == 2 ? '/serviceProvider' : 'user'

    return (
        <UserAction>
            <Link href={link} >Minha conta</Link>                                         
            <Link href={link}  passHref>
                <a href='/' onClick={handleLogout}>Sair</a>
            </Link>   
        </UserAction>
    )
}

export default ModalUserActions