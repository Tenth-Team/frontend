export type Promocode = {
  id: number
  status: string
  name: string
  ambassador: number
}

export type PromocodeRequest = Omit<Promocode, "id">
