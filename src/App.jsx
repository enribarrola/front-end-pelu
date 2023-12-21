import TablaFichaServicios from './components/tablaFichaServicios'
import Test from './components/Test'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path="/" element={<TablaFichaServicios />} />
				<Route path="/prueba" element={<Test />} />
			</Routes>
		</div>
	)
}

export default App