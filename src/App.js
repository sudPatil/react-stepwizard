import Step1 from './component/Step1';
import Step3 from './component/Step3';
import Step2 from './component/Step2';
import Step4 from './component/Step4';
import Wizard from './component/wizard/Wizard';

const App = () => {
	const steps = [
		{
			title: 'Account Setup',
			component: Step1,
		},
		{
			title: 'Social Setup',
			component: Step2,
		},
		{
			title: 'Confirm Details',
			component: Step3,
		},
    {
      title: 'Success..!!',
      component: Step4
    }
	];

  const handleComplete = () => {
    // close wizard.
  }
	return <Wizard steps={steps} onFinishHandler={handleComplete} />;
};

export default App;
