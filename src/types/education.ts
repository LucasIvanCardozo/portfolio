export type EducationStatus = 'in_progress' | 'completed'

export interface EducationEntry {
  id: string
  degree: string
  institution: string
  period: string
  status: EducationStatus
  progress?: number
}

export interface EducationDB {
  data: EducationEntry[]
}
