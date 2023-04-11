import LoginForm from "@components/login/LoginForm";
import useCheckAuth from "@helpers/useCheckAuth";
import Meta from "@partials/meta";

export default function Login(props: any) {
  useCheckAuth();

  return (
    <>
      <Meta />
      <main>
        <LoginForm {...props} />
      </main>
    </>
  );
}
