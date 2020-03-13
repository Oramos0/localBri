import React from 'react';
// * Styles
import './servicesHome.component.css';
import logoLocalBri from '../../../../media/localbri-only-bri.png';

const ServicesHome = () => {
  return (
    <div className='services-home' id='services'>
      <img
        className='services-home-img'
        src={logoLocalBri}
        alt='logo-help-traffic'
      />
      <h2 className='services-home-title'>Nuestros Servicios:</h2>

      <h2 className='services-home-subtitle'>
        Brindar ayuda a nuestros vendedores locales es nuestra prioridad
      </h2>

      <h3 className='services-home-description'>
        LocalBri ayuda a vender las creaciones a los vendedores locales, tales
        como a artesanos, pintores, fotografos, gastronomos, joyeros, etc.
      </h3>

      <div className='services-home-options'>
        <div className='services-home-option'>
          <i className='fas fa-palette fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Pinturas</h2>
          <h3 className='services-home-option-desc'>
            Busca pinturas increibles realizadas por el talento local. Encuentra
            esa pintura que tanto estabas buscando para poder adornar tu hogar y
            agregarla a tu colección.
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-dove fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Artesanias</h2>
          <h3 className='services-home-option-desc'>
            Ubica a los mejores artesanos en la zona y descubre aquel tipo de
            objetos fabulosos y abstractos que tanto te gustan y haste con
            muchos de ellos.
          </h3>
        </div>

        <div className='services-home-option'>
          <i
            className='fas fa-pepper-hot fa-3x'
            style={{ color: '#29a19c' }}
          ></i>
          <h2 className='services-home-option-title'>Comida tradicional</h2>
          <h3 className='services-home-option-desc'>
            Encuentra esos restaurantes con los antojitos más famosos y delicios
            de la región para que ese paladar descubra nuevos sabores y
            encuentres tu nueva comida favorita.
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-gem fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Joyería artesanal</h2>
          <h3 className='services-home-option-desc'>
            Localiza las los negiocios y vendeores con los accesorios más
            increibles con toda la cultura de la región y copleta ese outfit
            tradicional que tanto te gusta.
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-tshirt fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Prendas locales</h2>
          <h3 className='services-home-option-desc'>
            Arma ese outfint con las prendas mas veyas creadas por las manos
            artesanales de grandiosas personas y da a conocer el talento que nos
            rodea.
          </h3>
        </div>

        <div className='services-home-option'>
          <i className='fas fa-fire-alt fa-3x' style={{ color: '#29a19c' }}></i>
          <h2 className='services-home-option-title'>Otros</h2>
          <h3 className='services-home-option-desc'>
            Encuentra un sin fin de articulos y servicos que se encuentran en tu
            zona. Descubre nuevas creaciones por personas talentosas y apoya su
            talento adquiriendo sus porudctos.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
