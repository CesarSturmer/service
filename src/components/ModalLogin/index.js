import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { ButtonsContainer, SignUpButtonModal, LoginButtonModal } from './style'
import Link from 'next/link'

function ModalLogin({ userInfo, handleLogout }) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '45%',
      marginRight: '2rem',
      border: 'none',
    },
    paper: {
      backgroundColor: '#22AAC1',
      padding: theme.spacing(2, 4, 3),
      borderRadius: '0.625rem',
    },
  }))

  const classes = useStyles()

  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {userInfo.length !== 0 ? (
              <ButtonsContainer>
                {isUser ? (
                  <>
                    <a href="/user">Minha conta</a>
                    <a href="" onClick={handleLogout}>
                      Sair
                    </a>
                  </>
                ) : (
                  <>
                    <a href="/serviceProvider">Minha conta</a>
                    <a href="" onClick={handleLogout}>
                      Sair
                    </a>
                  </>
                )}
              </ButtonsContainer>
            ) : (
              <ButtonsContainer>
                <Link href="/login">
                  <LoginButtonModal>Entrar</LoginButtonModal>
                </Link>
                <Link href="/userForm">
                  <SignUpButtonModal>Cadastrar</SignUpButtonModal>
                </Link>
              </ButtonsContainer>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalLogin
