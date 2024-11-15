import CallToActionSection from '../../components/sections/CallToActionSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { HowToSection } from '../../components/sections/HowToSection';
import { TestimonialSection } from '../../components/sections/TestimonialSection';

export const ServicesPage = () => {
	return (
		<>
			<HeroSection
				title='Comprehensive Pet Services for Every Need'
				subtitle='From daily dog walks to overnight care, Fetch! Pet Care offers a wide range of services tailored to fit the unique needs of your pets.'
				btnText='Explore Services'
				btnLabel='Or Call 866.338.2463'
			/>
			<FeatureSection
				title='Our Tail-Wagging Services'
				subtitle='Your pets deserve the best. Discover the range of personalized services we offer to keep your furry friends happy and healthy.'
				inputLabel='Enter Your Location to Check Availability'
				inputId='zip-code'
				inputName='zip-code'
				inputPlaceholder='Zip Code'
			/>
			<TestimonialSection title='What Our Clients Are Saying...' />
			<HowToSection
				title='How Our Services Work'
				subtitle='Simply enter your location, select the services you need, and schedule a visit. Our experienced pet sitters are ready to provide loving care.'
				inputLabel='Find the Perfect Service'
				inputId='zip-code'
				inputName='zip-code'
				inputPlaceholder='Zip Code'
			/>
			<CallToActionSection
				title='Ready to Schedule?'
				subtitle="Let's make your pets happy! Book a pet sitter today or contact us for a custom plan tailored to your pets' needs."
				btnText='Schedule Now'
			/>
		</>
	);
};
