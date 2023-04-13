import LoginForm from "@components/login/LoginForm";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface ILoginServerSideProps {
  session: Session | null;
}

export const getServerSideProps: GetServerSideProps<
  ILoginServerSideProps
> = async (context) => {
  const session = await getSession(context);

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return { props: { session } };
};

export default function Login({ session, ...props }: ILoginServerSideProps) {
  return (
    <>
      <Meta />
      <main>
        <LoginForm {...props} />
      </main>
    </>
  );
}
