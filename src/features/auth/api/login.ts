import { api, request } from "@/shared/api/client";

type LoginResponse = {
  token: string;
};

export const login = (email: string, password: string) =>
  request<LoginResponse>(
    api.post("/auth/login", { email, password })
);