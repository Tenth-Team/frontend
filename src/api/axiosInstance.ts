import type { AxiosError, AxiosInstance } from "axios"
import axios from "axios"
import { getToken, removeToken } from "../utils/tokenStorage"

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://crm.ragimov700.ru", // Указываем базовый URL вашего API
})

// Добавляем обработчик перехвата для добавления токена авторизации к каждому запросу
axiosInstance.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Добавляем обработчик перехвата для обработки ошибок ответа
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      console.log("удалить токен")
      removeToken()
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
