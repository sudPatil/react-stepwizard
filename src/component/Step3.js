import React from 'react';

const Step3 = (props) => {
	const {
		values: { name, email, phone, password, facebook, twitter, github },
	} = props;

	return (
		<div className='form-container'>
			<ul className='list-group'>
				<li className='list-group-item'>Name: {name}</li>
				<li className='list-group-item'>Email: {email}</li>
				<li className='list-group-item'>Phone Number: {phone}</li>
				<li className='list-group-item'>
					Facebook URL: <a href={facebook}>{facebook}</a>
				</li>
				<li className='list-group-item'>
					Twitter URL: <a href={twitter}>{twitter}</a>
				</li>
				<li className='list-group-item'>
					Github URL: <a href={github}>{github}</a>
				</li>
			</ul>
		</div>
	);
};

export default Step3;
