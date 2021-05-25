import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: bold;

  @media(min-width: 1023px) and (max-width: 1100px) {
    padding: 0 3.125rem;
    font-size: 3.5rem;
  }  
  @media (min-width: 768px) and (max-width: 1022px) {
    padding: 0 3.125rem;
    font-size: 3.5rem;
  }  
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 0 3.125rem;
    font-size: 2.5rem;
  }  
  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0 3.125rem;
    font-size: 2rem;
  }  

  
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: normal;
  margin: 0 0 1rem 0;

  @media(min-width: 1023px) and (max-width: 1100px) {
    padding: 0 3.125rem;
    font-size: 1.25rem;
  } 
  @media (min-width: 768px) and (max-width: 1022px) {
    padding: 0 3.125rem;
    font-size: 1.5rem;
  } 
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.25rem;  
  } 
  @media (min-width: 320px) and (max-width: 479px) {
    font-size: 1rem;  
  } 


`;

const TextCotainer = ({fontSizeTitle, title, subtitle, secondTitle }) => {
  return (
    <>
      <Title style={fontSizeTitle && {fontSize: '2.25rem', }}>
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <Subtitle>{secondTitle}</Subtitle>
    </>
  );
};

export default TextCotainer;
