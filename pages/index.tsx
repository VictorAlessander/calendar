import Calendar from "@components/Calendar/Calendar";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface IHomeServerSideProps {
  session: Session | null;
}

export const getServerSideProps: GetServerSideProps<
  IHomeServerSideProps
> = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return { props: { session } };
};

export default function Home({ session, ...props }: IHomeServerSideProps) {
  return (
    <>
      <Meta />
      <main>
        <Calendar />
      </main>
    </>
  );
}
