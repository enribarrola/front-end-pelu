import PropTypes from 'prop-types';
import ResultadoBusqueda from './ResultadoBusqueda';
import "../styles/ResultadoBarraBusqueda.css"

// eslint-disable-next-line react/prop-types
const ResultadoBarraBusqueda = ({ results,setCliente }) => {

  return (
	<div className='result-list'>
		{
			results.map((result,id) => {
				return <ResultadoBusqueda result={result} key={id} setCliente={setCliente}/>
			})
		}
	</div>
  )
}
ResultadoBarraBusqueda.propTypes = {
	results: PropTypes.array.isRequired,
	setCliente: PropTypes.func.isRequired,
  };

export default ResultadoBarraBusqueda