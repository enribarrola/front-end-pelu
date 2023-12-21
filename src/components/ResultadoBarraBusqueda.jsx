import PropTypes from 'prop-types';
import ResultadoBusqueda from './ResultadoBusqueda';
import "../styles/ResultadoBarraBusqueda.css"

// eslint-disable-next-line react/prop-types
const ResultadoBarraBusqueda = ({ results }) => {

  return (
	<div className='result-list'>
		{
			results.map((result,id) => {
				return <ResultadoBusqueda result={result} key={id} />
			})
		}
	</div>
  )
}
ResultadoBarraBusqueda.propTypes = {
	results: PropTypes.array.isRequired
  };

export default ResultadoBarraBusqueda