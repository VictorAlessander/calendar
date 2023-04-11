import { prisma } from "@db/globalPrisma";

interface ILoginProps {
  email: string;
  password: string;
}

export default async function login({ email, password }: ILoginProps) {
  return await prisma.user.findFirst({
    where: { email: email, password: password },
  });
}
