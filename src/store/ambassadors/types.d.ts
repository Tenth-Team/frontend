export interface AmbassadorsRequest {
  count: number
  next: string
  previous: string
  results: AmbassadorsRoot[]
}

export interface AmbassadorsRoot {
  id: number
  ya_edu: YaEdu
  amb_goals: AmbGoal[]
  promo_code: string
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
}

export interface YaEdu {
  id: number | string
  name: string
}

export interface AmbGoal {
  id: number | string
  name: string
}
