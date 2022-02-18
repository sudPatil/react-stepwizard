import React from 'react';

const Step1 = (props) => {
	const { values, handleChange } = props;
	const { name, email, phone, password } = values;

	return (
		<div className='form-container'>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input type='text' className='form-control' name='name' onChange={handleChange} value={name || ''} />
			</div>
			<div className='form-group'>
				<label htmlFor='email'>Email</label>
				<input type='email' className='form-control' name='email' onChange={handleChange} value={email || ''} />
			</div>
			<div className='form-group'>
				<label htmlFor='phone'>Phone Number</label>
				<input type='number' className='form-control' name='phone' onChange={handleChange} value={phone || ''} />
			</div>
			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='form-control'
					name='password'
					onChange={handleChange}
					value={password || ''}
				/>
			</div>
		</div>
	);
};

export default Step1;
