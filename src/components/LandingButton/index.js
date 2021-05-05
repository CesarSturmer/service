import Link from 'next/link';
import styled from 'styled-components'

const Button = styled.button`
  width: 16rem;
  height: 6rem;
  background: rgba(184, 233, 244, 0.47);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
`;

const ImageContainer = styled.div`
  margin: 38px 18px 34px 30px;
`;

const ButtonText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  white-space: nowrap;
  margin: 36px 35px 35px 0px;
  color: ${({ theme }) => theme.colors.title};
`;

function LandingButton({serviceButton, imageSrc, text, to}) {
    return (
        <Link href={to}>
            <Button style={serviceButton && {backgroundColor: '#22AAC1', margin: '2rem 1rem'}}>
                <ImageContainer>
                    <img src={imageSrc} alt="Busca por serviço" />
                </ImageContainer>
                <ButtonText>{text}</ButtonText>
            </Button>
        </Link>
    )
}

export default LandingButton

