import type { AmbassadorRoot } from "../ambassador/types"

export interface AmbassadorsRequest {
  count: number
  next: string
  previous: string
  results: AmbassadorRoot[]
}
