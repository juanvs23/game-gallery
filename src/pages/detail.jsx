import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
import useAxios from '../hooks/useAxios';

export default function DetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { response } = useAxios({
		slug: 'games',
		id,
		options: null,
	});
	const returnPage = () => {
		navigate('/', { replace: true });
	};
	useEffect(() => {
		console.log(response);
	}, [response]);
	const title = response ? response.name : 'Details';
	return (
		<Layout title={title}>
			<AnimatePresence>
				{response ? (
					<>
						<motion.section
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className='mx-auto m-12 mb-12 bg-gray-300 rounded shadow-2xl flex flex-wrap'>
							<div
								className='relative basis-full p-4 w-full min-w-full h-80 bg-cover'
								style={{
									backgroundImage: `url(${response.background_image})`,
								}}>
								<div
									className='overalay z-2 absolute top-0 left-0 right-0 bottom-0 '
									style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
								<h1 className='relative text-5xl text-white z-10 font-black mb-5'>
									{response.name_original}
								</h1>
								<div className=' relative text-white'>
									{response.reddit_description}
								</div>
							</div>
							<div className='md:w-1/2 md:min-w-0 min-w-full p-4'>
								<h2 className='text-3xl font-bold mb-3'>Description</h2>
								<p className='text-base'>{response.description_raw}</p>
							</div>
							<div className='md:w-1/2 md:min-w-0 min-w-full  p-4'>
								<h2 className='text-3xl font-bold mb-3'>Developers:</h2>
								<ul className='mb-3'>
									{response.developers.map((developer, i) => (
										<li key={i}>{developer.name}</li>
									))}
								</ul>
								<h2 className='text-3xl font-bold mb-3'>Genre:</h2>
								<ul className='mb-3'>
									{response.genres.map((genres, i) => (
										<li key={i}>{genres.name}</li>
									))}
								</ul>
							</div>
						</motion.section>

						<div className='flex md:container mx-auto m-6 justify-between'>
							<button
								className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
								onClick={returnPage}>
								Return
							</button>
						</div>
					</>
				) : (
					<Spinner />
				)}
			</AnimatePresence>
		</Layout>
	);
}
