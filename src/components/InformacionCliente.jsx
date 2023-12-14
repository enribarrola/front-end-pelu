import PropTypes from 'prop-types';


function InformacionCliente({result}) {
  return (
	
	<div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h2 className="text-2xl font-semibold mb-6">Informacion Cliente Personal</h2>

    <div className="mb-4">
      <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">{console.log(result.nombre)}</label>
      <p id="nombre" className="text-gray-800 p-2 bg-gray-100 rounded">{"null"}</p>
    </div>

    <div className="mb-4">
      <label htmlFor="apellido" className="block text-gray-700 text-sm font-bold mb-2">Apellido</label>
      <p id="apellido" className="text-gray-800 p-2 bg-gray-100 rounded">{"null"}</p>
    </div>

    <div className="mb-4">
      <label htmlFor="ruc" className="block text-gray-700 text-sm font-bold mb-2">RUC</label>
      <p id="ruc" className="text-gray-800 p-2 bg-gray-100 rounded">{"null"}</p>
    </div>

    <div className="mb-4">
      <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">Número de Teléfono</label>
      <p id="telefono" className="text-gray-800 p-2 bg-gray-100 rounded">{"null"}</p>
    </div>

  </div>
  )
}

InformacionCliente.propTypes = {
	result: PropTypes.array.isRequired,
  };

export default InformacionCliente