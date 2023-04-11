import Calendar from "@components/Calendar/Calendar";
import useCheckAuth from "@helpers/useCheckAuth";
import Meta from "@partials/meta";

export default function Home() {
  useCheckAuth();

  return (
    <>
      <Meta />
      <main>
        <Calendar />
      </main>
    </>
  );
}
