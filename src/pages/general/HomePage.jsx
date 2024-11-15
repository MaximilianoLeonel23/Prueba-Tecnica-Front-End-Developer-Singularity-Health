import { HeroSection } from '../../components/sections/HeroSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import { TestimonialSection } from '../../components/sections/TestimonialSection';
import { HowToSection } from '../../components/sections/HowToSection';
import CallToActionSection from '../../components/sections/CallToActionSection';

const HomePage = () => {
	return (
		<>
			<HeroSection
				title='We Get Pet Care!'
				subtitle='For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and
				happy!'
				btnText='Schedule Service'
				btnLabel='Or Call 866.338.2463'
			/>
			<FeatureSection
				title='Out Services'
				subtitle='National Brand With a Local Feel. Experience the Fetch! Difference'
				inputLabel='Enter Your Location and Fetch Our Services'
				inputId='zip-code'
				inputName='zip-code'
				inputPlaceholder='Zip Code'
			/>

			<TestimonialSection title="Here's what pet owners have to say about Fetch! Pet Care..." />
			<HowToSection
				title='How it Works'
				subtitle="Because finding a good pet sitter shouldn't be a hassle. With Fetch! it's as easy
						as..."
				inputLabel='Enter Your Location and Fetch Our Services'
				inputId='zip-code'
				inputName='zip-code'
				inputPlaceholder='Zip Code'
			/>
			<CallToActionSection
				title='Make Fetch! Happen'
				subtitle='If your love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train
							every team member and provide ongoing support to help you get the most from your'
				btnText='Join Now'
			/>
		</>
	);
};

export default HomePage;
