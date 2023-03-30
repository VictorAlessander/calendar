import isAuthenticated from "@authentication/isAuthenticated";
import Calendar from "@components/Calendar";
import Meta from "@partials/meta";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return isAuthenticated();
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
