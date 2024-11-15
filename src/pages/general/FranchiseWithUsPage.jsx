import CallToActionSection from '../../components/sections/CallToActionSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { HowToSection } from '../../components/sections/HowToSection';
import { TestimonialSection } from '../../components/sections/TestimonialSection';

export const FranchiseWithUsPage = () => {
	return (
		<>
			<HeroSection
				title='Own a Fetch! Franchise'
				subtitle='Turn your passion for pets into a profitable business. Join the Fetch! Pet Care family and start making a difference in your community.'
				btnText='Become a Franchise Owner'
				btnLabel='Or Call 866.338.2463'
			/>
			<FeatureSection
				title='Why Franchise with Fetch?'
				subtitle='With over 17 years of experience, we offer proven support systems and training to help you succeed in your pet care business.'
				inputLabel='Enter Your Email and Receive More Information'
				inputId='email'
				inputName='email'
				inputPlaceholder='Email'
			/>
			<TestimonialSection title='Success Stories from Our Franchise Owners' />
			<HowToSection
				title='How to Get Started'
				subtitle='The process is simple! Fill out our inquiry form, attend an informational session, and start your journey as a Fetch! franchise owner.'
				inputLabel='Enter Your Email and Receive More Information'
				inputId='email'
				inputName='email'
				inputPlaceholder='Email'
			/>
			<CallToActionSection
				title='Ready to Start Your Journey?'
				subtitle='Take the first step toward owning a successful pet care business with Fetch! Pet Care. Let’s build something great together.'
				btnText='Get Started'
			/>
		</>
	);
};
