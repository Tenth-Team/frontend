import { Ambassadors } from "../../pages"

interface ValueItem {
  id: number | string
  name: string
}

interface ValueInfo {
  name: string
  values: ValueItem[]
}

export interface AmbassadorsFiltersRequest {
  ya_edu: ValueInfo
  country: ValueInfo
  city: ValueInfo
  status: ValueInfo
  gender: ValueInfo
  order: ValueInfo
}

// Перечисление для статуса амбассадора
export enum AmbassadorStatus {
  Active = "active",
  Paused = "paused",
  NotAmbassador = "not_ambassador",
  Pending = "pending",
}

// Перечисление для пола
export enum Gender {
  Male = "М",
  Female = "Ж",
}

// Перечисление для сортировки
export enum OrderBy {
  RegDate = "reg_date",
  FullName = "full_name",
}

export interface AmbassadorsInputs {
  search: string | null
  ya_edu: []
  country: []
  city: []
  status: []
  gender: null | "М" | "Ж"
  order: null | "reg_date" | "full_name"
}
