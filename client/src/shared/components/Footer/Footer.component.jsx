import React from 'react';
import {Icon} from 'antd';

import './footer.component.css'

const FooterComponent = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content company'>
      <p className="footer-title">LocalBri</p>
        Recuerda, en local bri puedes compartir todas aquellas obras que realices
        y quieras dar conocer al mundo, y que mejor que los que te rodean sepan
        sobre tu talento y hablidad para realizar cosas maravillosas, y por supuesto
        que puedas obtener un beneficio y te ayude a crecer tu talento día a día.
      </div >
      <div className='footer-content products'>
        <p className="footer-title">Productos</p>
        <ul>
          <li>Mision</li>
          <li>Servicos</li>
          <li>Social</li>
        </ul>
      </div>
      <div className='footer-content accounts'>
        <p className="footer-title" >Cuentas</p>
        <ul>
          <li>Mision</li>
          <li>Servicos</li>
          <li>Social</li>
        </ul>
      </div>
      <div className='footer-content resources'>
        <p className="footer-title" >Recursos</p>
        <ul>
          <li>Mision</li>
          <li>Servicos</li>
          <li>Social</li>
        </ul>
      </div>
      <div className='footer-content support'>
        <p className="footer-title" >Soporte</p>
        <ul>
          <li>Mision</li>
          <li>Servicos</li>
          <li>Social</li>
        </ul>
      </div>
      <div className='footer-content social-media'>
        
        <ul>
          <p className='footer-title'>Contactanos:</p>
          <li>
            <Icon type='facebook' theme='filled' style={{ color: 'white', fontSize: '20px' }} />
          </li>
          <li>
            <Icon type='twitter' style={{ color: 'white' }} />
          </li>
          <li>
            <Icon type='mail' theme='filled' style={{ color: 'white' }} />
          </li>
          <li>
            <Icon type='phone' theme='filled' style={{ color: 'white' }} />
            +52 321 654 9874
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterComponent;
