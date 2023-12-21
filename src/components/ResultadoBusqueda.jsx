import PropTypes from 'prop-types';
import "../styles/ResultadoBarraBusqueda.css"
import { useStore } from '../store/clienteStore';

function ResultadoBusqueda({ result }) {
	const {setCliente,setServicioClientes,servicio_clientes} = useStore()
	/* const setCliente = useStore(state => state.setCliente) */
	console.log(servicio_clientes);
	
	const handleClick = async (nuevoCliente) => {
		const url = `http://localhost:3000/api/obtener-fichas/${result.id_cliente}`;
		const data = { page: servicio_clientes.page , per_page: servicio_clientes.per_page }; // Tu objeto JSON aquí
		const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
		const resultFichas = await response.json();
		setServicioClientes(resultFichas)
		setCliente(nuevoCliente);
	}

	
	return (
		<div className='search-result cursor-pointer' onClick={() => handleClick(result)}  >{result.nombre + " " + result.apellido}</div>
	)
}


ResultadoBusqueda.propTypes = {
	result: PropTypes.object.isRequired
};
export default ResultadoBusqueda