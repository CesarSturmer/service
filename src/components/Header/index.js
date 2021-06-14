import Link from 'next/link'
import { useState, useEffect } from 'react'
import * as style from './style'
import api from '../../../pages/api'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonCircleOutline, IoPersonCircle } from 'react-icons/io5'
import ModalLogin from '../ModalLogin'
import ModalServices from '../ModalServices'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textDecoration: 'none',
    backgroundColor: '#22AAC1',
  },
}))

const Header = () => {
  const router = useRouter()
  const [openIconLogin, setOpenIconLogin] = useState(false)
  const [openIconService, setOpenIconService] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const [isUser, setIsUser] = useState(false)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

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
            <style.ButtonsContainerInfo onClick={handleClick}>
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
            
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                backgroundColor: '#22AAC1',
                
              }}
           
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              {isUser ? (
                <>
                <Typography className={classes.typography}>
                  <Link href="/user">Minha conta</Link>
                </Typography>
                <Typography onClick={handleLogout}>
                  Sair
                </Typography>
                </>                 
              
              ) : (
                <Typography className={classes.typography}>
                  <Link href="/serviceProvider">Minha conta</Link>
                  <Link href="" onClick={handleLogout}>
                    Sair
                  </Link>
                </Typography>
              )}
            </Popover>
         
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
        {userInfo.midiaPath ? (
          <style.UserPhoto
            src={`https://servicos-app.herokuapp.com/${userInfo.midiaPath}`}
          />
        ) : (
          <IoPersonCircleOutline size={60} />
        )}
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
