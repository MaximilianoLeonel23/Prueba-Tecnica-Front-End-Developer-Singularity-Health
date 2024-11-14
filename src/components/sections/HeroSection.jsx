import golderRetrieverImg from '../../assets/images/golden-retriever.png';

export const HeroSection = ({ title, subtitle }) => {
	return (
		<section className='flex items-start justify-between gap-32 z-10 px-32'>
			<div className='w-1/2 flex flex-col py-24 gap-8'>
				<h1 className='font-museo-sans-bold text-white text-6xl'>{title}</h1>
				<p className='text-white text-lg'>{subtitle}</p>
				<div className='flex items-center gap-8'>
					<button className='primary-button'>Schedule Service</button>
					<p className='text-white text-base'>Or Call 866.338.2463</p>
				</div>
			</div>
			<div className='w-1/2 flex items-start justify-center'>
				<img src={golderRetrieverImg} alt='Golden Retriever' className='p-8' />
			</div>
		</section>
	);
};
