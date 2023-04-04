import { isAuthenticated } from "@authentication/api/auth";
import Calendar from "@components/Calendar/Calendar";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const queryClient = new QueryClient();
  const query = await queryClient.fetchQuery(
    "isAuthenticated",
    isAuthenticated
  );

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
