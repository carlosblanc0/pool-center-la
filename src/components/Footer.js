import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Assine nossa newsletter e fique por dentro das novidades
        </p>
        <p className='footer-subscription-text'>
        Você pode se desinscrever a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu e-mail'
            />
            <Button buttonStyle='btn--outline'>Quero assinar!</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Pool Center</h2>
            <Link to='/sign-up'>Sobre Nós</Link>
            <Link to='/sign-up'>Trabalhe Conosco</Link>
            <Link to='/sign-up'>Termos de Serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Ouvidoria</h2>
            <Link to='/sign-up'>Contato</Link>
            <Link to='/sign-up'>Suporte</Link>
          </div>
        </div>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link  to='/' className='social-logo'>
              Pool Center
            </Link>
          </div>
          <small class='website-rights'>Pool Center Piscinas © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='//pt-br.facebook.com/poolcenterlazer/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' href=""/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to="//instagram.com/poolcenterpiscinasusa/"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='//youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>

            <Link
              class='social-icon-link linkedin'
              to='//www.linkedin.com/company/pool-center-piscinas'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
              
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
