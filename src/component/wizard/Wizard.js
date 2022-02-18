import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Nav from './Nav';
import './style/index.css';
import Panel from './Panel';
import Footer from './Footer';

const Wizard = ({ steps, onFinishHandler }) => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({});

	const handleStepChange = useCallback(
		(stepIndex) => {
			if (stepIndex > steps.length) {
				onFinishHandler();
			} else {
				setCurrentStep(stepIndex);
			}
		},
		[steps.length]
	);

	const handleChange = useCallback((event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	});

	return (
		<div className='container my-3'>
			<div className='row justify-content-center'>
				<div className='col-md-6 card'>
					<div className='card-header'>
						<Nav currentStep={currentStep} totalSteps={steps.length} />
					</div>
					<div className='card-body'>
						<Panel step={steps[currentStep - 1]} stepData={formData} handleChange={handleChange} />
					</div>
          <div className='card-footer mt3'>
					<Footer totalSteps={steps.length} currentStep={currentStep} handleStepChage={handleStepChange} />
          </div>
				</div>
			</div>
		</div>
	);
};

Wizard.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  customProp: function(props) {
    if (props['steps'].length <= 2) {
      return new Error('Should pass minimum 3 steps'
      );
    }
  },
};

export default Wizard;
