import Link from 'next/link'
import { useState, useEffect } from 'react'
import * as style from './style'
import api from '../../../pages/api'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonCircleOutline, IoPersonCircle } from 'react-icons/io5'
import ModalLogin from '../ModalLogin'
import ModalServices from '../ModalServices'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [openIconLogin, setOpenIconLogin] = useState(false)
  const [openIconService, setOpenIconService] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const [open, setOpen] = useState(false)
  const [isUser, setIsUser] = useState(false)

  const handleLogin = () => setOpenIconLogin(!openIconLogin)

  const handleServices = () => setOpenIconService(!openIconService)

  useEffect(() => {
    const sessionActive = sessionStorage.getItem('session_active')
    const getUserInfo = async () => {
      const token = sessionStorage.getItem('validated_token')
      await api
        .get('usuario', { headers: { Authorization: 'Bearer ' + token } })
        .then((res) => {
          setUserInfo(res.data)
          if (res.data.perfis.length !== 2) {
            setIsUser(true)
          }
        })
        .catch(() => {})
    }
    sessionActive && getUserInfo()
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('session_active')
    sessionStorage.removeItem('validated_token')
    router.push('/')
  }

  return (
    <style.HeaderContainer>
      <style.ContainerMenu onClick={handleServices}>
        <GiHamburgerMenu size={60} />
        {openIconService && <ModalServices />}
      </style.ContainerMenu>
      <style.Container>
        <Link href="/">
          <div>
            <style.Title>Serviço</style.Title>
          </div>
        </Link>
        <style.ContainerOptions>
          <Link href="/serviceSearch">
            <style.Subtitle>Serviços</style.Subtitle>
          </Link>
          <style.Subtitle>Seu Local</style.Subtitle>
          <style.Subtitle>Sobre nós</style.Subtitle>
        </style.ContainerOptions>

        {userInfo.length !== 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <style.ButtonsContainerInfo onClick={() => setOpen(!open)}>
              <style.UserName>{userInfo.nomeCompleto}</style.UserName>
              {userInfo.midiaPath ? (
                <style.UserPhoto
                  src={`https://servicos-app.herokuapp.com/${userInfo.midiaPath}`}
                />
              ) : (
                <IoPersonCircle
                  color={'white'}
                  size={63}
                  style={{ position: 'relative', zIndex: 1, right: 5 }}
                />
              )}
            </style.ButtonsContainerInfo>
            {open && (
              <style.UserAction>
                {isUser ? (
                  <>
                    <a href="/user">Minha conta</a>
                    <a href="/" onClick={handleLogout}>
                      Sair
                    </a>
                  </>
                ) : (
                  <>
                    <a href="/serviceProvider">Minha conta</a>
                    <a href="/" onClick={handleLogout}>
                      Sair
                    </a>
                  </>
                )}
              </style.UserAction>
            )}
          </div>
        ) : (
          <style.ButtonsContainer>
            <Link href="/userForm">
              <style.SignUpButton>Cadastrar</style.SignUpButton>
            </Link>
            <Link href="/login">
              <style.LoginButton>Entrar</style.LoginButton>
            </Link>
          </style.ButtonsContainer>
        )}
      </style.Container>
      <style.ContainerIconLogin onClick={handleLogin}>
        <IoPersonCircleOutline size={60} />
        {openIconLogin && (
          <ModalLogin
            userInfo={userInfo}
            handleLogout={handleLogout}
            isUser={isUser}
          />
        )}
      </style.ContainerIconLogin>
    </style.HeaderContainer>
  )
}

export default Header
