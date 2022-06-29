import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CardComponent({ imageUrl, title, id, position }) {
	const colsFixed =
		position === 2
			? 'lg:row-span-3 md:row-span-2 lg:col-span-2 md:col-span-1'
			: 'lg:max-w-sm';
	return (
		<motion.article
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 1 }}
			className={`${colsFixed}  rounded overflow-hidden shadow-2xl  p-4`}>
			<img
				src={imageUrl}
				className='object-cover h-48  w-96 lg:w-full lg:h-auto'
			/>
			<div className='px-6 py-4'>
				<h2 className='font-bold text-center text-xl mb-2'>{title}</h2>
			</div>
			<div className='flex justify-center'>
				<Link
					to={`/detail/${id}`}
					className=' transition duration-150 ease-in-out inline-block bg-sky-700 hover:bg-sky-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'>
					Leer más
				</Link>
			</div>
		</motion.article>
	);
}
