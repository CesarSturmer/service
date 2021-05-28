import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 320px) and (max-width: 767px) {
  }
`;

const ButtonsContainer = styled.div`
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SignUpButtonModal = styled.button`
  border: 1px solid white;
  border-radius: 18px;
  width: 170px;
  height: 2.5rem;
  color: #ffffff;
  background: none;

`;

const LoginButtonModal = styled.button`
  border: 1px solid white;
  border-radius: 18px;
  width: 170px;
  height: 2.5rem;
  color: #ffffff;
  background: none;
  margin-bottom: 1rem;
`;

function ModalLogin() {
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
  }));

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <ButtonsContainer>
              <Link href="/login">
                <LoginButtonModal>Entrar</LoginButtonModal>
              </Link>
              <Link href="/userForm">
                <SignUpButtonModal>Cadastrar</SignUpButtonModal>
              </Link>
            </ButtonsContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalLogin;
