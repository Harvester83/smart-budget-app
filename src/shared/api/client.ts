import axios from "axios";
import { ApiResponse } from "./types";
import { mapError } from "./errorMapper";

export const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
      (error) => {
    const mapped = mapError(error);

    return Promise.reject(mapped);
  }
);

export async function request<T>(
    promise: Promise<{ data: ApiResponse<T> }>
): Promise<T> {
    const res = await promise;

    if (res.data.error) {
        throw res.data.error;
    }

    return res.data.data as T;
}