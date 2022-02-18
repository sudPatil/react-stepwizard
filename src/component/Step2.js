import React from 'react';

const Step2 = (props) => {
	const { values, handleChange } = props;
	return (
		<div className='form-container'>
			<div className='form-group'>
				<label htmlFor='facebook'>Facebook URL</label>
				<input type='text' className='form-control' name='facebook' onChange={handleChange} value={values.facebook} />
			</div>
			<div className='form-group'>
				<label htmlFor='twitter'>Twitter URL</label>
				<input type='text' className='form-control' name='twitter' onChange={handleChange} value={values.twitter} />
			</div>
			<div className='form-group'>
				<label htmlFor='github'>Github URL</label>
				<input type='text' className='form-control' name='github' onChange={handleChange} value={values.github} />
			</div>
		</div>
	);
};

export default Step2;
