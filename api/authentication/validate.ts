import { IValidateResponse } from "@pages/api/auth/validate";

export async function validateAuth(): Promise<IValidateResponse> {
  const data = await fetch(`${process.env.API_BASE_URL}/api/auth/validate`);

  return data.json() as Promise<IValidateResponse>;
}
