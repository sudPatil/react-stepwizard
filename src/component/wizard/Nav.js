import React from 'react';

const Nav = ({ currentStep, totalSteps }) => {
	const width = `${(100 / totalSteps) * currentStep}%`;
	return (
		<div>
			<div className='progress-bar progress-bar-striped' style={{ width: width, height: '.8rem'}}></div>
		</div>
	);
};

export default Nav