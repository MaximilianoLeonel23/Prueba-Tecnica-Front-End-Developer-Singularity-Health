import CallToActionSection from '../../components/sections/CallToActionSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { HowToSection } from '../../components/sections/HowToSection';
import { TestimonialSection } from '../../components/sections/TestimonialSection';

export const AboutUsPage = () => {
	return (
		<>
			<HeroSection
				title='About Fetch! Pet Care'
				subtitle="Since 2001, we've been dedicated to providing exceptional pet care services across the nation. Learn more about our mission and values."
				btnText='Meet Our Team'
				btnLabel='Or Call 866.338.2463'
			/>
			<FeatureSection
				title='Our Story'
				subtitle="We started with a simple idea: to provide reliable and loving care for pets, just like family. Over the years, we've grown into a trusted name in pet care."
				inputLabel='Enter Your Email And Hear About Us'
				inputId='email'
				inputName='email'
				inputPlaceholder='Email'
			/>
			<TestimonialSection title='What Pet Owners Say About Us' />
			<HowToSection
				title='Our Mission & Vision'
				subtitle='To deliver the highest quality pet care services, ensuring peace of mind for pet owners and happiness for their furry companions.'
				inputLabel='Enter Your Email And Hear About our Mission'
				inputId='email'
				inputName='email'
				inputPlaceholder='Email'
			/>
			<CallToActionSection
				title='Join the Fetch! Family'
				subtitle="We're always looking for passionate pet lovers to join our team. Explore career opportunities and help us make a difference."
				btnText='Apply Today'
			/>
		</>
	);
};
