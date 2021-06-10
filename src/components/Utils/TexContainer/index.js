import {Title, Subtitle} from './style'

const TextCotainer = ({fontSizeTitle, title, subtitle, secondTitle }) => {
  return (
    <>
      <Title style={fontSizeTitle && {fontSize: '4.5rem' }}>
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <Subtitle>{secondTitle}</Subtitle>
    </>
  )
}

export default TextCotainer
