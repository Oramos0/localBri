import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
// * Styles and Ant-Design
import './formProduct.component.css';
import { Form, Icon, Input, Button, message, Upload, Select } from 'antd';
// * Actions
import {
  addProduct,
  addProductImages,
  clearCurrentProduct
} from '../../../actions/productActions';
const { TextArea } = Input;
const { Dragger } = Upload;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function FormProduct({ form, addProduct, addProductImages }) {
  useEffect(() => {
    form.validateFields();
    // eslint-disable-next-line
  }, []);

  const [filesUpload, setFilesUpload] = useState();

  const onFileChange = e => {
    e.preventDefault();
    setFilesUpload(e.target.files);
  };

  const success = () => {
    message.success('La informacion ha sido enviada <3');
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      const {
        productName,
        productDescripcion,
        galeryImgUrls,
        productUbication,
        productPrice,
        category
      } = values;
      if (!err) {
        console.log('TCL: FormProduct -> values', values);
        const formData = new FormData();
        for (let i = 0; i < filesUpload.length; i++) {
          formData.append('galeryImgUrls', filesUpload[i]);
        }
        success();
        addProduct(
          {
            productName,
            productDescripcion,
            productUbication,
            productPrice,
            galeryImgUrls,
            category,
            productLikes: '0'
          },
          formData
        );
        form.resetFields();
      }
    });
  };

  // const props = {
  //   name: 'galeryImgUrls',
  //   multiple: true,
  //   action: '/api/products',
  //   onSubmit(info) {
  //     const { status } = info.file;
  //     if (status !== 'uploading') {
  //       // console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   }
  // };

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form;

  // Only show error after a field is touched. | isFieldTouched('') && getFieldError('');
  const titleError = isFieldTouched('formTitle') && getFieldError('formTitle');
  const descriptionError =
    isFieldTouched('formDescription') && getFieldError('formDescription');
  const uploadError =
    isFieldTouched('formUpload') && getFieldError('formUpload');
  const locationError =
    isFieldTouched('formLocation') && getFieldError('formLocation');
  const priceError = isFieldTouched('formPrice') && getFieldError('formPrice');

  return (
    <div className='form-background'>
      <div className='form-container'>
        <h2 className='form-title'>
          <span role='img' aria-label='palette'>
            🎨
          </span>
          Datos del producto
          <span role='img' aria-label='taco'>
            🌮
          </span>
        </h2>
        <Form
          className='form-antd-container'
          onSubmit={handleSubmit}
          enctype='multipart/form-data'
        >
          <Form.Item
            className='form-antd-item'
            validateStatus={titleError ? 'error' : ''}
            help={titleError || ''}
          >
            {getFieldDecorator('productName', {
              rules: [
                { required: true, message: 'Ingrese nombre del producto' }
              ]
            })(
              <Input
                prefix={<Icon type='coffee' style={{ color: 'white' }} />}
                placeholder='Nombre'
              />
            )}
          </Form.Item>

          <Form.Item
            className='form-antd-item'
            validateStatus={descriptionError ? 'error' : ''}
            help={descriptionError || ''}
          >
            {getFieldDecorator('productDescripcion', {
              rules: [
                {
                  required: true,
                  message: 'Ingrese una descripción del articulo.'
                }
              ]
            })(
              <TextArea
                className='form-product-text-area'
                rows={3}
                placeholder='Descripción'
              />
            )}
          </Form.Item>

          <Form.Item>
            <input type='file' multiple onChange={onFileChange} />
            {/* {getFieldDecorator('galeryImgUrls', {
              rules: [
                {
                  required: true,
                  message: 'Suabe al menos una imagen del articulo.'
                }
              ]
            })(
              <Dragger {...props} style={{ backgroundColor: '#393e46' }}>
                <p className='ant-upload-drag-icon'>
                  <Icon type='inbox' style={{ color: '#29a19c' }}></Icon>
                </p>
                <p className='ant-upload-text'>
                  Haz clic aquí o arrastra tus imagenes para subirlas
                </p>
                <p className='ant-upload-hint'>
                  Sube un mínimo de 1 imagen o un máximo de 4 imagenes, por
                  favor.
                </p>
              </Dragger>
            )} */}
          </Form.Item>

          <Form.Item
            className='form-antd-item'
            validateStatus={locationError ? 'error' : ''}
            help={locationError || ''}
          >
            {getFieldDecorator('productUbication', {
              rules: [
                {
                  required: true,
                  message: 'Ingrese su ubicación o punto de venta'
                }
              ]
            })(
              <Input
                prefix={<Icon type='environment' style={{ color: 'white' }} />}
                placeholder='Ubicación'
              />
            )}
          </Form.Item>

          <Form.Item
            className='form-antd-item'
            validateStatus={priceError ? 'error' : ''}
            help={priceError || ''}
          >
            {getFieldDecorator('productPrice', {
              rules: [
                {
                  required: true,
                  message: 'Ingrese la cantidad de costo del articulo'
                }
              ]
            })(
              <Input
                prefix={<Icon type='dollar' style={{ color: 'white' }} />}
                placeholder='Precio'
              />
            )}
          </Form.Item>

          <Form.Item className='form-ant-item'>
            {getFieldDecorator('category', {
              initialValue: 'Ropa',
              rules: [
                {
                  required: true,
                  message: 'Seleccionar una categoria'
                }
              ]
            })(
              <Select>
                <Select.Option value='Pinturas'>Pinturas</Select.Option>
                <Select.Option value='Artesanias'>Artesanias</Select.Option>
                <Select.Option value='Comida'>Comida</Select.Option>
                <Select.Option value='Joyería'>Joyería</Select.Option>
                <Select.Option value='Ropa'>Ropa</Select.Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item className='form-item-btn'>
            <Button
              type='primary'
              icon='tag'
              htmlType='submit'
              disabled={hasErrors(getFieldsError())}
            >
              Agregar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  currentProduct: state.products.currentProduct
});
export default connect(mapStateToProps, {
  addProduct,
  addProductImages,
  clearCurrentProduct
})(Form.create({ name: 'normal_form' })(FormProduct));
