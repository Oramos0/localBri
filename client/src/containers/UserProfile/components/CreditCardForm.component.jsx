import React, {useEffect, useState} from 'react';
// * Styles and Ant-Design
import './creditCardForm.component.css';
import {Form, Icon, Input, Button, Radio} from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const CreditCardFormComponent = ({form}) => {
  useEffect(()=>{
    form.validateFields();
  }, [])

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form;
   // Only show error after a field is touched. | isFieldTouched('') && getFieldError('');
   const cardNumberError = isFieldTouched('formCardNumber') && getFieldError('formCardNumber');
   const cardNameError = isFieldTouched('formCardName') && getFieldError('formCardName');
   const cardDateError = isFieldTouched('formCardDate') && getFieldError('formCardDate');
   const cardCodeError = isFieldTouched('formCardCode') && getFieldError('formCardCode');

  return (
    <div className="form-background-credit-card">
      <div className='form-container-credit-card'>
        <h2 className='form-title'>
          <span role='img' aria-label='credit-card'>
            💳
          </span>
          Metodo de pago:
          <span role='img' aria-label='wallet'>
            👛
          </span>
        </h2>

       <Form className="form-antd-container">
         
       <Radio.Group>
          <Radio value={1} style={{color: 'white'}}>Crédito</Radio>
          <Radio value={2} style={{color: 'white'}}>Débito</Radio>
        </Radio.Group>

        <Form.Item
          className="form-antd-item"
          validateStatus={cardNumberError ? 'error' : ''}
          help={cardNumberError || ''}
        >
          {getFieldDecorator('cardNumber',{
            rules:[
              {required: true, message: 'Ingrese el número de tarjeta'}
            ]
          })(
            <Input
              prefix={<Icon type='number' style={{ color: 'white' }}/>}
              placeholder='Número de tarjeta'
            />
          )}
          
        </Form.Item>

        <Form.Item
          className="form-antd-item"
          validateStatus={cardNameError ? 'error' : ''}
          help={cardNameError || ''}
        >
          {getFieldDecorator('cardName',{
            rules:[
              {required: true, message: 'Ingrese el nombre del dueño de la tarjeta'}
            ]
          })(
            <Input
              prefix={<Icon type='smile' style={{ color: 'white' }}/>}
              placeholder='Nombre en la tarjeta'
            />
          )}
          
        </Form.Item>

        <Form.Item
          className="form-antd-item"
          validateStatus={cardDateError ? 'error' : ''}
          help={cardDateError || ''}
        >
          {getFieldDecorator('cardDate',{
            rules:[
              {required: true, message: 'Ingrese la fecha de expiración de su tarjeta'}
            ]
          })(
            <Input
              prefix={<Icon type='calendar' style={{ color: 'white' }}/>}
              placeholder='Fecha de expiración'
            />
          )}
        </Form.Item>

        <Form.Item
          className="form-antd-item"
          validateStatus={cardCodeError ? 'error' : ''}
          help={cardCodeError || ''}
        >
          {getFieldDecorator('cardCode',{
            rules:[
              {required: true, message: 'Ingrese el codigo de seguridad de su tarjeta'}
            ]
          })(
            <Input
              prefix={<Icon type='right-square' style={{ color: 'white' }}/>}
              placeholder='CVV'
            />
          )}
        </Form.Item>

        <Form.Item className='form-item-btn'>
            <Button
              type='primary'
              icon='plus-circle'
              htmlType='submit'
              disabled={hasErrors(getFieldsError())}
            >
              Agregar
            </Button>
          </Form.Item>

       </Form>
      </div>
    </div>
  )
}

export default Form.create({name:'normal_form'})(CreditCardFormComponent);