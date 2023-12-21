import { useStore } from '../store/clienteStore'


function TablaServiciosClientes() {
	const servicio_clientes = useStore(state => state.servicio_clientes)
	return (
		<div className="container mx-auto">
			<div className="my-4">
				<table className="min-w-full border border-gray-300">
					<thead>
						<tr>
							<th className="border border-gray-300 p-2">
								Fecha Servicio
							</th>
							<th className="border border-gray-300 p-2">
								Servicio Realizado
							</th>
							<th className="border border-gray-300 p-2">
								Costo
							</th>
						</tr>
					</thead>
					<tbody>
						{servicio_clientes.ficha?.map((item, index) => (
							<tr key={index}>
								<td>{item.fecha_servicio}</td>
								<td>{item.nombre_servicio}</td>
								<td>{item.costo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>

	)
}

export default TablaServiciosClientes