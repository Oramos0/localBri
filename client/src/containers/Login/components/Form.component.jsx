import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// Antd
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// * Styles
import './form.component.css';
// * Actions
import { setAlert } from '../../../actions/alertActions';
import { login, clearErrors } from '../../../actions/authActions';
// logo
import user from '../../../media/user.png';
import Password from 'antd/lib/input/Password';

function NormalLoginForm({
  form,
  setAlert,
  login,
  clearErrors,
  error,
  isAuthenticated
}) {
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert('Contraseña / Correo invalido, OMG!!! 0:!!!', 'error');
      clearErrors();
    }
  }, [error, isAuthenticated, history]);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (values.email === '' || values.password === '') {
          setAlert('Porfavor llena todos los campos', 'warning');
        } else {
          login({
            email: values.username,
            password: values.password
          });
        }
      }
    });
  };
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className='login-form'>
      <i
        className='fas fa-user user-logo'
        style={{ fontSize: '120px', color: '#393e46' }}
      ></i>{' '}
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Por favor introduce tu usuario' }]
        })(
          <Input
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Usuario / Email'
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
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox style={{ color: 'white' }}>Recordarme</Checkbox>)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Logear
        </Button>
      </Form.Item>
      <Form.Item>
        <a className='login-form-forgot' href=''>
          Olvidé el password
        </a>
        <Link to='/registro' className='login-register'>
          Registrarse
        </Link>
      </Form.Item>
      <Form.Item></Form.Item>
    </Form>
  );
}

const mapStateToProps = state => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  setAlert,
  login,
  clearErrors
})(Form.create({ name: 'normal_form' })(NormalLoginForm));
