import validate from "@services/authentication/validate";
import type { NextApiRequest, NextApiResponse } from "next";

export type IValidateResponse = {
  authenticated: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IValidateResponse>
) {
  const isAuthenticated = validate();

  if (isAuthenticated !== undefined)
    res.status(200).json({ authenticated: true });

  res.status(200).json({ authenticated: false });
}
