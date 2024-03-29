export type СontentType = {
  id: number
  status: string
  full_name: string
  telegram: string
  link: string
  guide: boolean
  created_date: string
  ambassador: number
  comment: string | null
}

export interface СontentRequest {
  full_name: string
  telegram: string
  link: string
  guide: boolean
}

export interface ContentStatus {
  status: string
}
