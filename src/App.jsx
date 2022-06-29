import { Routes, Route } from 'react-router-dom';

import DetailPage from './pages/detail';
import HomePage from './pages/home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/detail/:id' element={<DetailPage />} />
		</Routes>
	);
}

export default App;
