import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import CardComponent from '../components/cardComponent';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
import useAxios from '../hooks/useAxios';

export default function HomePage() {
	const limit = 5;
	const [cards, setCards] = useState([]);
	const [currentPage, setCurrePage] = useState(0);

	/**
	 * Get the data
	 */
	const { response } = useAxios({
		slug: 'games',
		id: null,
		options: null,
	});

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrePage(currentPage - 1);
		}
	};
	const nextPage = () => {
		if (currentPage < Math.round(response.results.length / limit)) {
			setCurrePage(currentPage + 1);
		}
	};
	const changePage = (limit, currentPage) => {
		if (response) {
			setCards(response.results.slice(currentPage, currentPage + limit));
		}
	};
	useEffect(() => {
		changePage(limit, currentPage);
		console.log(cards);
	}, [currentPage]);

	useEffect(() => {
		if (response) changePage(limit, 0);
	}, [response]);
	return (
		<Layout title={'Games'}>
			<section className='sm:grid  sm:grid-rows-2 sm:grid-flow-col gap-4 '>
				<Suspense fallback={'Loadin'}>
					<AnimatePresence>
						{cards.length > 1 ? (
							cards.map((item, index) => {
								// eslint-disable-next-line camelcase
								const { background_image, name, id } = item;
								return (
									<CardComponent
										position={index}
										// eslint-disable-next-line camelcase
										imageUrl={background_image}
										title={name}
										id={id}
										key={index}
									/>
								);
							})
						) : (
							<Spinner />
						)}
					</AnimatePresence>
				</Suspense>
			</section>
			{cards.length > 1 && (
				<div className=' md:container mx-auto m-6 justify-between'>
					{currentPage > 1 ? (
						<button
							className='bg-white float-left hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
							onClick={prevPage}>
							Prev
						</button>
					) : null}
					{currentPage !== Math.round(response.results.length / limit) ? (
						<button
							className='bg-white hover:bg-gray-100 float-right text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
							onClick={nextPage}>
							Next
						</button>
					) : null}
				</div>
			)}
		</Layout>
	);
}
