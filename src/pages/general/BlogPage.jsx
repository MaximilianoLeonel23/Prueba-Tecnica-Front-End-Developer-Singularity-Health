import CallToActionSection from '../../components/sections/CallToActionSection';
import { FeatureSection } from '../../components/sections/FeatureSection';
import { HeroSection } from '../../components/sections/HeroSection';
import { HowToSection } from '../../components/sections/HowToSection';
import { TestimonialSection } from '../../components/sections/TestimonialSection';

export const BlogPage = () => {
	return (
		<>
			<HeroSection
				title='The Fetch! Blog'
				subtitle='Your go-to source for pet care tips, training advice, and heartwarming stories. Discover how to give your pets the best life possible.'
				btnText='Read Our Blog'
				btnLabel='Or Call 866.338.2463'
			/>
			<FeatureSection
				title='Latest Articles'
				subtitle='Stay up-to-date with the latest in pet care, industry trends, and tips for pet owners.'
				inputLabel='Enter Your Email To Stay Updated'
				inputId='articles'
				inputName='articles'
				inputPlaceholder='Email'
			/>
			<TestimonialSection title='Our Readers Love Us' />
			<HowToSection
				title='Contribute to Our Blog'
				subtitle='Got pet advice or a story to share? We’re always looking for guest writers who are passionate about pets. Contact us to get featured!'
				inputLabel='Enter Your Email To Participate'
				inputId='articles'
				inputName='articles'
				inputPlaceholder='Email'
			/>
			<CallToActionSection
				title='Subscribe to Our Newsletter'
				subtitle='Get the latest articles, tips, and exclusive offers delivered right to your inbox. Join the Fetch! community today!'
				btnText='Subscribe'
			/>
		</>
	);
};
