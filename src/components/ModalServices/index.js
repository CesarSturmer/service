import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import {Container, ContainerIcon, Subtitle} from './style'
import Link from 'next/link'
import {FaChevronLeft} from 'react-icons/fa'

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
  }))

  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
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

export default ModalServices
