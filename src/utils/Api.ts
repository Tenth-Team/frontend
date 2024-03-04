import { CONFIG_API } from "./data";
import { getToken } from "./tokenStorage";

interface RequestType {
  url: string | undefined;
  method: string;
  data?: {} | undefined;
  params?: string | undefined;
}

interface ConfigType {
  method: string;
  headers: {};
  body?: string;
}

class Api {
  private _baseUrl: string;
  private _headers: { "Content-Type"?: string; Authorization?: string };
  constructor(options: {
    baseUrl: string;
    headers: { "Content-Type"?: string; Authorization?: string };
  }) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  private _checkResponse = async (res: Response) => {
    if (res.ok) {
      if (res.status === 204) {
        return res;
      }
      const data = await res.json();
      return data;
    }
    if (res.status === 404) {
      throw res;
    }
    const err = await res.json();
    throw err;
  };

  // Делаем запрос на сервер
  private _makeRequest = async ({ url, method, data }: RequestType) => {
    const config: ConfigType = {
      method,
      headers: this._headers,
    };
    const token = getToken();
    if (token) {
      this._headers.Authorization = `Token ${token}`;
    }

    if (data !== undefined) {
      config.body = JSON.stringify(data);
    }
    const res = await fetch(`${this._baseUrl}${url}`, config);

    return this._checkResponse(res);
  }; 

// Логинимся

postLogin = ( data: {}) => {
    this._makeRequest(
        {
            url: `/auth/token/login/`,
            method: "POST",
            data,
        }
    )
};

// Разлогиниваемся

postLogout = ( data: {}) => {
    this._makeRequest(
        {
            url: `/auth/token/logout/`,
            method: "POST",
            data,
        }
    )
};

}

  export const api = new Api(CONFIG_API);