export interface ContentPage {
  count: number
  next: string
  previous: string
  results: СontentType[]
}

export type СontentType = {
  id: number
  status: string
  full_name: string
  telegram: string
  link: string
  guide: boolean
  created_date: string
  ambassador: number
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
