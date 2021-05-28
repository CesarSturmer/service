import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import Link from 'next/link';
import {FaChevronLeft} from 'react-icons/fa'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

`;
const ContainerIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
`;

const Subtitle = styled.h1`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.title};
  padding: 2.688rem;
  cursor: pointer;


`;

function ModalServices() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flexStart',
      height: '45%',      
      border: 'none',
    },
    paper: {
      backgroundColor: '#22AAC1',
      padding: theme.spacing(2, 4, 3),

  
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
            <ContainerIcon>
              <FaChevronLeft  color={'#FFFFFF'} size={20}  onClick={handleClose}/>
            </ContainerIcon>

            <Container>
              <Link href="/serviceSearch">
                <Subtitle>Serviços</Subtitle>
              </Link>
              <Subtitle>Seu Local</Subtitle>
              <Subtitle>Sobre nós</Subtitle>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalServices;
