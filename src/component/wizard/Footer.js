import React from 'react';

const Footer = ({ handleStepChage, totalSteps, currentStep }) => {
  const lastStep = currentStep === totalSteps;
  const showPrev = currentStep > 1;
	const btnLabel = lastStep ? 'Finish' : 'Next';
	return (
		<>
     {showPrev && <button type="button" className="btn btn-primary col-md-6 col-12" onClick={() => handleStepChage(currentStep - 1)} >Previous</button> }
     <button type="button" className="btn btn-primary col-md-6 col-12" onClick={() => handleStepChage(currentStep + 1)} >{btnLabel}</button>

		</>
	);
};

export default Footer;