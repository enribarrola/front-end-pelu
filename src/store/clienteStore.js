import { createWithEqualityFn } from "zustand/traditional";

export const useStore = createWithEqualityFn((set) => ({
	cliente: {},
	servicio_clientes: {
		page: 1,
		per_page: 10,
	},
	setCliente: (nuevoCliente) => set(({
		cliente: { ...nuevoCliente }
	})),
	setServicioClientes: (nuevoServicioClientes) => set((state) => ({
		servicio_clientes: {  ...state.servicio_clientes,...nuevoServicioClientes }
	})),
	setPaginaActual: (nuevaPagina) => set((state) => ({
		servicio_clientes: { ...state.servicio_clientes, page: nuevaPagina }
	})),

}))