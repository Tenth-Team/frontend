export interface RequestType {
  url: string | undefined
  method: string
  data?: {} | undefined
  params?: string | undefined
}

export interface ConfigType {
  method: string
  headers: {}
  body?: string
}

export interface AuthToken {
  auth_token: string
}

export interface LoginData {
  password: string
  username: string
}

