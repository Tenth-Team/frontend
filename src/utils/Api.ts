import type { ConfigType, RequestType, LoginData } from "../@types/api"
import { CONFIG_API } from "./data"
import { getToken } from "./tokenStorage"

class Api {
  private _baseUrl: string
  private _headers: { "Content-Type"?: string; Authorization?: string }
  constructor(options: {
    baseUrl: string
    headers: { "Content-Type"?: string; Authorization?: string }
  }) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  private _checkResponse = async (res: Response) => {
    if (res.ok) {
      if (res.status === 204) {
        return res
      }
      const data = await res.json()
      return data
    }
    if (res.status === 404) {
      throw res
    }
    const err = await res.json()
    throw err
  }

  // Делаем запрос на сервер
  private _makeRequest = async ({ url, method, data }: RequestType) => {
    const config: ConfigType = {
      method,
      headers: this._headers,
    }
    const token = getToken()
    if (token) {
      this._headers.Authorization = `Token ${token}`
    }

    if (data !== undefined) {
      config.body = JSON.stringify(data)
    }
    const res = await fetch(`${this._baseUrl}${url}`, config)

    return this._checkResponse(res)
  }

  // Амбассадоры
  getAmbassadors = () =>
    this._makeRequest({ url: "/employees/", method: "GET" })

  // Получение всех данных о сотруднике
  getEmployeeByID = (id: string | undefined) =>
    this._makeRequest({ url: `/employees/${id}`, method: "GET" })

  // Auth
  login = (data: LoginData) =>
    this._makeRequest({
      url: `/api/v1/auth/token/login/`,
      method: "POST",
      data,
    })
  logout = () =>
    this._makeRequest({
      url: `/api/v1/auth/token/logout/`,
      method: "POST",
    })
}

export const api = new Api(CONFIG_API)
