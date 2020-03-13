import React, { useState } from 'react';
// * AntD
import { Menu, Dropdown, Icon, Checkbox } from 'antd';
// * Styles
import './artGalleryMenuFilter.component.css';

const ArtGalleryMenuFilterComponent = () => {
  const [visible, setVisible] = useState(false);
  // const [ filterOptions, setFilterOptions ] = useState()

  const handleMenuClick = e => {
    e.key === '99' && setVisible(false);
  };

  const handleVisibleChange = flag => {
    setVisible(flag);
  };

  const menuItems = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='0'>
        <Checkbox value='Pinturas'>Pinturas</Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Checkbox value='Pinturas'>Artesanias</Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2'>
        <Checkbox value='Pinturas'>Comida</Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>
        <Checkbox value='Pinturas '>Joyería</Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='4'>
        <Checkbox value='Pinturas'>Ropa</Checkbox>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='99'>Aplicar Filtro</Menu.Item>
    </Menu>
  );

  return (
    <div className='menu-drop-down-container'>
      <Dropdown
        overlay={menuItems}
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <a className='ant-dropdown-link' href='#'>
          Filtrar por <Icon type='filter' />
        </a>
      </Dropdown>
    </div>
  );
};

export default ArtGalleryMenuFilterComponent;
