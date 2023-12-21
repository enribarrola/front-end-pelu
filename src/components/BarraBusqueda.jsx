import { useRef, useState } from "react"
import PropTypes from 'prop-types';
import "../styles/ResultadoBarraBusqueda.css"

const BarraBusqueda = ({ setResults }) => {
	const [input, setInput] = useState("");

	const fetchSearch = async (value) => {
		const response = await fetch(`http://localhost:3000/api/cliente/${value||'z'}`);
		const data = await response.json();
		const results = data.filter((item) => {
			return (
				value &&
				item &&
				item.nombre &&
				item.apellido &&
				item.nombre.toLowerCase().includes(value.toLowerCase()) ||
				item.ruc.toLowerCase().includes(value.toLowerCase()));
		});
		cambiarEstado(results);
	};

	const cambiarEstado = (results) => {
		setResults(results);
	};

	const debounceRef = useRef();

	/* const changeStyle = () => {
		console.log(document.getElementsByClassName('result-list')[0].style.display = 'absolute');
	}; */


	const handleChange = (event) => {
		if( debounceRef.current ) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			setInput(event.target.value);
			fetchSearch(event.target.value);
		}, 600);
		
	}

	return (
		<>
			<form>
				<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</div>
					<input onChange={handleChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar por Nombre o Ruc." required />
					<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
				</div>
			</form>
		</>
	)
}
BarraBusqueda.propTypes = {
	setResults: PropTypes.func.isRequired,
};

export default BarraBusqueda