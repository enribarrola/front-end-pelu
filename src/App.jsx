import TablaFichaServicios from './components/tablaFichaServicios'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path="/" element={<TablaFichaServicios />} />
			</Routes>
		</div>
	)
}

export default App