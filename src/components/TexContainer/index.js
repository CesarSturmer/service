import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: normal;
  margin: 0 0 1rem 0;

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
