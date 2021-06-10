import Link from 'next/link';
import {FooterContainer, IconsContainer, TextContainer, TextItem} from './style'
import { RiFacebookCircleFill, RiMailLine, RiPhoneLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <RiFacebookCircleFill />
        <RiMailLine />
        <RiPhoneLine />
      </IconsContainer>
      <TextContainer>
        <Link href="/">
          <TextItem>Home</TextItem>
        </Link>
        <Link href="/">
          <TextItem>Sobre nós</TextItem>
        </Link>
        <Link href="/serviceSearch">
          <TextItem>Seu local</TextItem>
        </Link>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
