import { useStore } from '../store/clienteStore';


function Test() {
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
  return (
	<>
	<button onClick={handleClick}>Agregar Cliente</button>
	<p>{cliente.nombre || "No hay nada."}</p>
	</>
  )
}

export default Test