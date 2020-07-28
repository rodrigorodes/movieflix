import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo_movie_flix.png';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da MovieFlix" />
            </a>
            <ButtonLink className="ButtonLink" href="/">Novo vídeo</ButtonLink>
        </nav>
    )
}


export default Menu;