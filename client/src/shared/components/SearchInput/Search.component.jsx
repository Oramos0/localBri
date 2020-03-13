import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
// * AntD
import { Input } from 'antd';
// * Styles
import './search.component.css';
// *Actions
import { filterProduct, clearFilter } from '../../../actions/productActions';

const SearchComponent = ({ filterProduct, clearFilter, filteredProducts }) => {
  const text = useRef();
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (filteredProducts === null) {
      text.current.input.state.value = '';
    }
    // eslint-disable-next-line
  }, []);

  const onChange = e => {
    if (text.current.input.state.value !== '') {
      filterProduct(text.current.input.state.value);
      setIsFiltered(true);
    } else {
      clearFilter();
      setIsFiltered(false);
    }
  };

  const onClick = () => {
    clearFilter();
    setIsFiltered(false);
    text.current.input.state.value = '';
  };

  const { Search } = Input;
  return (
    <div className='search-input-container'>
      {isFiltered && <label onClick={onClick}>Borrar filtro</label>}
      <Search
        className='search-bar'
        ref={text}
        // onChange={onChange}
        placeholder='Buscar Producto'
        onSearch={onChange}
        enterButton
      />
    </div>
  );
};

const mapStateToPros = state => ({
  filteredProducts: state.products.filteredProducts
});

export default connect(mapStateToPros, {
  filterProduct,
  clearFilter
})(SearchComponent);
