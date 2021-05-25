import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.button`
  width: 16rem;
  height: 6rem;
  background: rgba(184, 233, 244, 0.47);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;

  @media (min-width: 1023px) and (max-width: 1100px) {
    padding: 0 3.125rem;
    width: 13rem;
    height: 5rem;
  }
  @media (min-width: 768px) and (max-width: 1022px) {
    padding: 0 3.125rem;
    width: 13rem;
    height: 5rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 0 3.125rem;
    width: 13rem;
    height: 4rem;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0 3.125rem;
    width: 9rem;
    height: 3rem;
  }  
`;

const ImageContainer = styled.div`
  padding: 0 0.625rem 0 1.563rem;

  @media (min-width: 1023px) and (max-width: 1100px) {
    padding-left: 0.75rem;
  }
  @media (min-width: 768px) and (max-width: 1022px) {
    padding-left: 0.75rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    padding-left: 0.75rem;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0px 0.313rem;
    > img {
      padding: 0px 0px 0 0.313rem;
      height: 1rem;
    }
    
  }
`;

const ButtonText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.063rem;
  white-space: nowrap;
  margin: 2.25rem 2.188rem 2.188rem 0px;
  color: ${({ theme }) => theme.colors.title};

  @media (min-width: 1023px) and (max-width: 1100px) {
    margin: 0;
    padding-right: 0.75rem;
    font-size: 1.25rem;
  }
  @media (min-width: 768px) and (max-width: 1022px) {
    margin: 0;
    padding-right: 0.75rem;
    font-size: 1.25rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    margin: 0;
    padding-right: 0.75rem;
    font-size: 1.25rem;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    margin: 0;
    padding-right: 0.75rem;
    font-size: 0.875rem;
  }
`;

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
