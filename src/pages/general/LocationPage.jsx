import CallToActionSection from '../../components/sections/CallToActionSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { HowToSection } from '../../components/sections/HowToSection';
import { TestimonialSection } from '../../components/sections/TestimonialSection';

export const LocationPage = () => {
	return (
		<>
			<HeroSection
				title='Find Pet Care Near You'
				subtitle='Fetch! Pet Care is closer than you think. Whether you’re at home or traveling, our trusted pet sitters are just around the corner to keep your furry friends happy.'
				btnText='Find a Sitter'
				btnLabel='Or Call 866.338.2463'
			/>
			<FeatureSection
				title='Local Pet Care, National Trust'
				subtitle='Experience the personalized care your pets deserve from a brand you can trust. Enter your location below to find Fetch! Pet Care services near you.'
				inputLabel='Enter Your Location and Fetch Our Services'
				inputId='zip-code'
				inputName='zip-code'
				inputPlaceholder='Zip Code'
			/>
			<TestimonialSection title='Happy Pets, Happy Owners' />
			<HowToSection
				title='How Fetch! Works for Your Location'
				subtitle="Finding reliable pet care shouldn't be stressful. With Fetch!, it's quick and easy. Just enter your location, and we’ll connect you with a trusted sitter nearby."
				inputLabel='Enter Your Location and Fetch Our Services'
				inputId='zip-code'
				inputName='zip-code'
				inputPlaceholder='Zip Code'
			/>
			<CallToActionSection
				title='Join Our Local Pet Care Team'
				subtitle="Love animals? Become part of the Fetch! family. We're always looking for dedicated pet care providers in new areas. Start your journey today!"
				btnText='Apply Now'
			/>
		</>
	);
};
