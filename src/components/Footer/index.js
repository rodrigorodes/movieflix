import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo_emusic_footer.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo E-Music" />
      </a>
      <p>
        Electronic For Friends
      </p>
    </FooterBase>
  );
}

export default Footer;
