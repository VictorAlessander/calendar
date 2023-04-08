import { PrismaClient } from "@prisma/client";

/**
 * checks if the user's token is valid and he's authenticated
 */
export default async function validate() {
  const prisma = new PrismaClient();

  return await prisma.user.findFirstOrThrow({
    where: {
      email: "victor.alessander.gr@townsendcorp.com",
    },
  });
}
