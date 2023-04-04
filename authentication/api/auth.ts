interface IAuthenticateResponse {
  authenticated: boolean;
}

export function isAuthenticated(): Promise<IAuthenticateResponse> {
  return Promise.resolve({ authenticated: false });
}
