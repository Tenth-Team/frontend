export type AmbassadorRoot = {
  id: number
  ya_edu: YaEdu
  amb_goals: AmbGoal[]
  promo_code: Promocodes[]
  full_name: string
  gender: string
  address: string
  postal_code: string
  email: string
  phone_number: string
  telegram: string
  edu: string
  work: string
  study_goal: string
  blog_url: string
  clothing_size: string
  shoe_size: string
  additional_comments: string
  status: string
  reg_date: string
  country: string
  city: string
  content_count: number
}

export interface YaEdu {
  id: number
  name: string
}

export interface AmbGoal {
  id: number
  name: string
}

export interface Promocodes {
  ambassador: number
  id: number
  name: string
  status: string
}

export type AmbassadorRequest = Omit<AmbassadorRoot, "id">
