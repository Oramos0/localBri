import React, {Fragment} from 'react'
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';

import './about.component.css'

const AboutComponent = () => {
  return (
    <Fragment>
      <NavbarHome/>

      <div className='about-container'>
      <div className='about-content-container'>
        <p className='about-title'>Sobre Nosotros</p>
        <div className='about-content'>
          <p className='title-content'>Nuestra misión</p>
          La misión de LocalBri es dar a conocer el trabajo artistico de las telentosas personas
          que están a tu alrededor y puedas conocer y acceder a su trabajo facilmente y puedan ser
          apoyados.
        </div>
        <div className='about-content'>
          <p className='title-content'>Nuestra esencia</p>
          Dentro de LocalBri tenemos el entuciasmo y compromiso de hacer llegar tu trabajo a quienes
          te rodean y sea facil para ellos poder apoyar el ezfuerzo detrás de ello.
        </div>
        <div className='about-content'>
          <p className='title-content'>Nuestra promesa</p>
          LocalBri está comprometido llevar tu trabajo a las personas que lo sepan valorar y puesa seguir
          creciendo día tras día y así puedas hasta poder sustentarte por lo que te apaciona, y todo esto
          a tráves de esta plataforma.
        </div>
        <div className='about-content'>
          <p className='title-content'>Nuestra vibra</p>
          El equipo de LocalBri siempre se mantendrá con la actituda hasta arriba y el optimismo en los cielos para poder ayudarte a que sigas hacindo lo que te gusta. LocalBri valora tu esfuerzo
          y por ello tratamos de brindarte el apoyo posible.
        </div>
        
        
      </div>
    </div>
    </Fragment>
    
  )
}

export default AboutComponent;
