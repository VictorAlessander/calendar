import Calendar from "@components/Calendar/Calendar";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import { validateAuth } from "@api/authentication/validate";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const queryClient = new QueryClient();
  const query = await queryClient.fetchQuery("isAuthenticated", validateAuth);

  if (!query.authenticated)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return { props: {} };
};

export default function Home() {
  return (
    <>
      <Meta />
      <main>
        <Calendar />
      </main>
    </>
  );
}
