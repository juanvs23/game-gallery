import { useEffect, useState } from 'react';
import getApi from '../utils/getApi';

/**
 * useAxios
 * @param {object} callParams
 * @returns object
 */
export default function useAxios(callParams) {
	const { slug, id, options } = callParams;
	const [response, setResponse] = useState(undefined);
	const [error, setError] = useState('');
	const [loading, setloading] = useState(false);

	const getData = () => {
		setloading(true);
		getApi(slug, id, options)
			.then((res) => {
				console.log(res);
				setResponse(res);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setloading(false);
			});
	};
	useEffect(() => {
		getData();
	}, []);

	return { response, error, loading };
}
