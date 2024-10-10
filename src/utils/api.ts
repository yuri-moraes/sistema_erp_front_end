import axios, { AxiosError } from 'axios';
import { ApiError } from 'src/models/Api';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const useApi = async <TypeDataResponse>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: object,
  withAuth: boolean = true
): Promise<{
  data?: TypeDataResponse;
  detail: string;
}> => {
  // Lógica de autenticação

  try {
    const token = localStorage.getItem('AUTH_ACCESS');

    const request = await axios(`${BASE_URL}/${endpoint}`, {
      method,
      data: method != 'GET' && data,
      params: method == 'GET' && data,
      headers: withAuth ? { Authorization: `Bearer ${token}` } : {}
    });

    return {
      data: request.data,
      detail: ''
    };
  } catch (e) {
    const error = e as AxiosError<ApiError>;

    return {
      data: null,
      detail: error.response.data.detail || error.message
    };
  }
};
