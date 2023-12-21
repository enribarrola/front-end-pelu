import BarraBusqueda from './BarraBusqueda.jsx'
import ResultadoBarraBusqueda from './ResultadoBarraBusqueda.jsx';
import InformacionCliente from './InformacionCliente.jsx';
import { useState } from 'react';
import { useStore } from '../store/clienteStore';
import TablaServiciosClientes from './TablaServiciosClientes.jsx';
import Paginacion from './Paginacion.jsx';

function TablaFichaServicios() {
	const [results, setResults] = useState([]);
	//const [cliente, setCliente] = useState(null);
	const {cliente,servicio_clientes} = useStore()


	return (
		<div className="container mx-auto">
			<div className="my-4">
				<BarraBusqueda setResults={setResults} />
				<ResultadoBarraBusqueda results={results} />
				{cliente.id_cliente > 0 ? <InformacionCliente /> : null }
				<TablaServiciosClientes />
				{servicio_clientes.cantidad_paginas > 0 ? <Paginacion /> : null}
			</div>
		</div>
	)
}

export default TablaFichaServicios;