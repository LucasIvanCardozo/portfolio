import type { ProyectDB } from '../../../types/proyects'
import proyects from '../proyects.json'

const { data } = proyects as unknown as ProyectDB

export const proyectsRepository = {
  getAll: () => data,
}
