export interface Option {
  id: number
  name: string
  label: string
}

export type Filter = {
  id: number
  label: string
  name: string
  list: {
    id: number
    name: string
    label: string
  }[]
  type: string
}
