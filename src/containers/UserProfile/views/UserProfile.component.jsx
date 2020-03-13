import React from 'react';
// * Components
import FormProduct from '../../../shared/components/FormProduct/FormProduct.component';
import CreditCardForm from '../../UserProfile/views/components/CreditCardForm.component';
// * Utils
// * Styles
import './userProfile.component.css';

const UserProfileComponent = () => {
	return(
		<div className="user-profile-form-container">
			<FormProduct />
			<CreditCardForm />
		</div>
	);
};

export default UserProfileComponent