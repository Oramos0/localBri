import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
// * Component
import Card from '../../../../shared/components/ImageCard/ImageCard.component';
// * Styles
import './artGalleryCardContainer.component.css';
// * Actions
import {
  getAllProducts,
  getUserProducts
} from '../../../../actions/productActions';

const ArtGalleryCardContainer = ({
  getAllProducts,
  getUserProducts,
  products,
  loading,
  filteredProducts
}) => {
  const location = useLocation();
  useEffect(() => {
    location.pathname !== '/galeria' ? getUserProducts() : getAllProducts();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return location.pathname !== '/galeria' ? (
      <h4>No has publicado ni un producto...</h4>
    ) : (
      <h4>Cargando...</h4>
    );
  }

  return (
    <Fragment>
      <div className='art-gallery-card-container'>
        {!loading && products.length === 0 ? (
          <p>No hay productos publicados</p>
        ) : filteredProducts !== null ? (
          filteredProducts.map(card => {
            console.log(card.galeryImgUrls);
            return (
              <Card
                key={card._id}
                id={card._id}
                images={card.galeryImgUrls.length !== 0 && card.galeryImgUrls}
                title={card.productName}
                description={card.productDescripcion}
                price={card.productPrice}
                ubication={card.productUbication}
                userRouter={card.urlDetails}
                likes={card.productLikes}
                footer={true}
              />
            );
          })
        ) : (
          products.map(card => {
            return card.galeryImgUrls.length !== 0 ? (
              <Card
                key={card._id}
                id={card._id}
                images={card.galeryImgUrls}
                title={card.productName}
                description={card.productDescripcion}
                price={card.productPrice}
                ubication={card.productUbication}
                userRouter={card.urlDetails}
                likes={card.productLikes}
                footer={true}
              />
            ) : (
              <Card
                key={card._id}
                id={card._id}
                title={card.productName}
                price={card.productPrice}
                ubication={card.productUbication}
                userRouter={card.urlDetails}
                likes={card.productLikes}
                footer={true}
              />
            );
          })
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  filteredProducts: state.products.filteredProducts
});

export default connect(mapStateToProps, {
  getAllProducts,
  getUserProducts
})(ArtGalleryCardContainer);
