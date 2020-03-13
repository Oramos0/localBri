import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// Antd
import { Form, Icon, Input, Button } from 'antd';
// Styles
import './formRegister.component.css';
// Actions
import { register, clearErrors } from '../../../actions/authActions';
import { setAlert } from '../../../actions/alertActions';

const FormRegisterComponent = ({
  form,
  register,
  clearErrors,
  setAlert,
  isAuthenticated,
  error
}) => {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    if (error === 'User already exist') {
      setAlert('Este usuario ya existe 0:!!!', 'error');
      clearErrors();
    }
    //eslint-disable-nextline
  }, [error, isAuthenticated, history]);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { name, email, password, password2 } = values;

        if (name === '' || email === '' || password === '') {
          setAlert('Porfavor llena todos los campos n.n', 'error');
        } else if (password !== password2) {
          setAlert('La contraseña no coincide :c', 'error');
        } else {
          register({
            name,
            email,
            password
          });
        }
      }
    });
  };
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className='register-form'>
      <i
        className='fas fa-user user-logo'
        style={{ fontSize: '120px', color: '#393e46' }}
      ></i>{' '}
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Por favor introduce tu usuario' }]
        })(
          <Input
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Nombre'
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Por favor introduce tu usuario' }]
        })(
          <Input
            prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='email'
            placeholder='E-mail'
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Por favor introduce tu password.' }
          ]
        })(
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Password'
            minLength='6'
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password2', {
          rules: [{ required: true, message: 'Por favor repite password.' }]
        })(
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Repetir Password'
            minLength='6'
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          className='register-form-button'
        >
          Registrarse
        </Button>
      </Form.Item>
      <Form.Item>
        <Link to='/' className='register-form-forgot'>
          Home
        </Link>
        <Link to='/login' className='register-register'>
          Iniciar Sesión
        </Link>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  register,
  clearErrors,
  setAlert
})(Form.create({ name: 'normal_form' })(FormRegisterComponent));
