import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table'
import BarraBusqueda from './BarraBusqueda.jsx'
import ResultadoBarraBusqueda from './ResultadoBarraBusqueda.jsx';
/* import InformacionCliente from './InformacionCliente.jsx'; */
import { useState } from 'react';
import { useStore } from '../store/clienteStore';

function TablaFichaServicios() {
	const data = [
		{ fecha_servicio: '2023-01-01', nombre_servicio: 'Servicio A', costo: 100 },
		{ fecha_servicio: '2023-01-02', nombre_servicio: 'Servicio B', costo: 150 },
		{ fecha_servicio: '2023-01-03', nombre_servicio: 'Servicio C', costo: 200 },
		{ fecha_servicio: '2023-01-03', nombre_servicio: 'Servicio C', costo: 200 },
		// Agrega más datos según sea necesario
	];

	const columns = [
		{ header: 'Fecha', accessorKey: 'fecha_servicio' },
		{ header: 'Servicio', accessorKey: 'nombre_servicio' },
		{ header: 'Costo', accessorKey: 'costo' },
		// Agrega más columnas según sea necesario
	]
	const [results, setResults] = useState([]);
	//const [cliente, setCliente] = useState(null);

	const setCliente = useStore(state => state.setCliente)
	const cliente = useStore(state => state.cliente)

	const handleClick = () => {
		const nuevoCliente = {
			nombre: 'Juan',
			edad: 25,
			// Otros atributos del cliente
		};
		setCliente(nuevoCliente);
	}


	const tabla = useReactTable({ data, columns: columns, getCoreRowModel: getCoreRowModel() });
	return (
		<div className="container mx-auto">
			<div className="my-4">
				<BarraBusqueda setResults={setResults} />
				<ResultadoBarraBusqueda results={results} />
				{<button onClick={handleClick}>Agregar Cliente</button>}
				{cliente && <p>{"hola"}</p>}
				{/* {cliente && <InformacionCliente resultadoSeleccionado={cliente}  />} */}
				<table className="min-w-full border border-gray-300">
					<thead>
						{
							tabla.getHeaderGroups().map(headerGroup => (
								<tr key={headerGroup.id}>
									{
										headerGroup.headers.map(header => (
											<th key={header.id} className="border border-gray-300 p-2">
												{header.column.columnDef.header}
											</th>
										))
									}
								</tr>
							))
						}
					</thead>
					<tbody>
						{
							tabla.getRowModel().rows.map((row) => (
								<tr key={row.id}>
									{row.getVisibleCells().map((cell, index) => (
										<td key={index}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
			<nav aria-label="Page navigation example">
				<ul className="inline-flex -space-x-px text-base h-10">
					<li>
						<a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
					</li>
					<li>
						<a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
					</li>
					<li>
						<a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
					</li>
				</ul>
			</nav>

		</div>
	)
}

export default TablaFichaServicios;