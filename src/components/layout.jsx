import { Helmet } from 'react-helmet';
import Footer from './footer';
import { Adsense } from '@ctrl/react-adsense';
export default function Layout({ children, title }) {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className='2xl:container mx-auto p-4'>{children}</main>
			<Adsense
				client='ca-pub-4769151228133115'
				slot='7657484277'
				google_adtest='on'
				style={{ display: 'block' }}
				layout='in-article'
				format='fluid'
			/>
			<Footer />
		</>
	);
}
