import type { EducationDB, EducationEntry } from '../../../types/education'
import educationData from '../education.json'

const { data } = educationData as unknown as EducationDB

export const educationRepository = {
  getAll: (): EducationEntry[] => data,
}
