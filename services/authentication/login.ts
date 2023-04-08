import { PrismaClient } from "@prisma/client";

interface ILoginProps {
  username: string;
  password: string;
}

export default function login({ username, password }: ILoginProps) {}
