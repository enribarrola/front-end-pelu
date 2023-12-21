import { useStore } from '../store/clienteStore';


function InformacionCliente() {
	const cliente = useStore(state => state.cliente)
	
  return (
	<>
  <h2 className="text-2xl font-semibold mb-6">Informacion Cliente Personal</h2>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
    <p className="text-gray-800 p-2 bg-gray-100 rounded break-words">{cliente.nombre}</p>
  


    <label className="block text-gray-700 text-sm font-bold mb-2">Apellido:</label>
    <p className="text-gray-800 p-2 bg-gray-100 rounded break-words">{cliente.apellido}</p>



    <label className="block text-gray-700 text-sm font-bold mb-2">RUC:</label>
    <p className="text-gray-800 p-2 bg-gray-100 rounded break-words">{cliente.ruc}</p>



    <label className="block text-gray-700 text-sm font-bold mb-2">Telefono:</label>
    <p className="text-gray-800 p-2 bg-gray-100 rounded break-words">{cliente.telefono}</p>
  </div>
</>
  )
}


export default InformacionCliente