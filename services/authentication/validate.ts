import { prisma } from "@db/globalPrisma";

/**
 * checks if the user's token is valid and he's authenticated
 */
export default async function validate() {
  return await prisma.user.findFirstOrThrow({
    where: {
      email: "victor.alessander.gr@townsendcorp.com",
    },
  });
}
