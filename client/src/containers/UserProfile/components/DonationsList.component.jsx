import React from 'react'

import './donationsList.component.css'
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import AvatatImage from '../../../media/localbri.png';

const data = [
  {
    title: 'Plato Artesanal: $500.00 mx',
    descriptionDonation: 'Mensaje de JuanYut: "Me agrada que sigas creando y compartiendo las bellas obras que las culturas oaxaqueñas no han compartido por años."'
  },
  {
    title: 'Plato Artesanal: $130.00 mx',
    descriptionDonation: 'Mensaje de Vallin: "Espero que sigas con ese maravilloso trabajo explendido, están 10/10 los platos"'
  },
  {
    title: 'Plato Artesanal: $50.00 mx',
    descriptionDonation: 'Mensaje de Otoniel: "Hola Aldu, sé que no es mucho pero espero que esto te sirva para que continues en esas obras de arte. Saludos :)"'
  },
  {
    title: 'Plato Artesanal: $250.00 mx',
    descriptionDonation: 'Mensaje de Erik Ps: "Hola Aldu, estoy muy interesado en tus platos hermosos, cuando tegas más diseños contactame a este correo: eparra@gmail.com"'
  },
];

export const DonationsList = () => {
  return (
    <div className="donations-container">

      <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>

          <List.Item.Meta className='item-list-dontations'

            avatar={<Avatar src={AvatatImage} />}
            title={<a href="http://localhost:3000/perfil/5e55c26ed6ed782c44622b6e">{item.title}</a>}
            description={item.descriptionDonation}

          />
        </List.Item>
      )}
      />
    </div>
  )
}

export default DonationsList;