import login from "@services/authentication/login";
import type { NextApiRequest, NextApiResponse } from "next";

export type ILoginResponse = {
  token?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILoginResponse>
) {
  if (req.method == "POST") {
    const loggedIn = await login(req.body);

    if (loggedIn !== null) res.status(200).json({ token: loggedIn.email });

    res.status(400).json({ error: "Username or password are incorrect." });
  }

  res.status(405);
}
