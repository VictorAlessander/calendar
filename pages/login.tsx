import { isAuthenticated } from "@authentication/api/auth";
import LoginForm from "@components/login/LoginForm";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const queryClient = new QueryClient();
  const query = await queryClient.fetchQuery(
    "isAuthenticated",
    isAuthenticated
  );

  if (query.authenticated)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return { props: { authenticated: query.authenticated } };
};

export default function Login(props: any) {
  return (
    <>
      <Meta />
      <main>
        <LoginForm {...props} />
      </main>
    </>
  );
}
