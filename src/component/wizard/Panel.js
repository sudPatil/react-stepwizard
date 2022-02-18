import React from 'react';

const Panel = ({ step, stepData, handleChange }) => {
	const { component : Component , title } = step;
	return (
		<div className='panel'>
      <form>
      <h1 className='mb-5 text-center'>{title}</h1>
			<Component values={stepData} handleChange={handleChange} />
      </form>
		</div>
	);
};

export default Panel;
