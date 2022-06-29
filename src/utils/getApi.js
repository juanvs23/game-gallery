import axiosInstance from './axiosInstance';

/**
 * getApi
 * @param {string} slug
 * @param {string} id
 * @param {string} options
 * @returns object
 */
export default async function getApi(slug, id = null, options = null) {
	const isID = id === null ? '' : `/${id}`;
	const isOptions = options === null ? '' : `/${options}`;
	const { data } = await axiosInstance(
		`/${slug}${isID}?key=${import.meta.env.VITE_IMDB_API_KEY}&${isOptions}`
	);

	return await data;
}
