import LoginForm from "@components/login/LoginForm";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";
import { QueryClient, useQuery } from "react-query";
import { validateAuth } from "@api/authentication/validate";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const queryClient = new QueryClient();
  const query = await queryClient.fetchQuery("isAuthenticated", validateAuth);

  if (query.authenticated)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return { props: {} };
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
