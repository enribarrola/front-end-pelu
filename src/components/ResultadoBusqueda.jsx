import PropTypes from 'prop-types';
import "../styles/ResultadoBarraBusqueda.css"
import InformacionCliente from './InformacionCliente.jsx';

function ResultadoBusqueda({ result, setCliente }) {

	return (
		<div className='search-result cursor-pointer' onClick={() => <InformacionCliente result={result}/>}>{result.nombre + " " + result.apellido}</div>
	)
}


ResultadoBusqueda.propTypes = {
	result: PropTypes.object.isRequired,
	setCliente: PropTypes.func.isRequired,
};
export default ResultadoBusqueda