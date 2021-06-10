import Link from 'next/link';
import {Button, ButtonText, ImageContainer} from './style'

function LandingButton({ serviceButton, imageSrc, text, to }) {
  return (
    <Link href={to}>
      <Button
        style={
          serviceButton && { backgroundColor: '#22AAC1', margin: '2rem 1rem' }
        }
      >
        <ImageContainer>
          <img src={imageSrc} alt="Busca por serviço" />
        </ImageContainer>
        <ButtonText>{text}</ButtonText>
      </Button>
    </Link>
  );
}

export default LandingButton;
