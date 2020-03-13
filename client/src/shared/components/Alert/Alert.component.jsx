import React from 'react';
import { connect } from 'react-redux';
//Antd
import { Alert } from 'antd';
// Styles
import './alert.component.css';

const AlertComponent = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <Alert
        key={alert.id}
        className='alert-container'
        message={alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
        description={alert.msg}
        type={alert.type}
        showIcon
      />
    ))
  );
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AlertComponent);
