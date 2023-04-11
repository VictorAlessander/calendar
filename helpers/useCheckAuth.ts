import { AuthContext } from "@pages/_app";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function useCheckAuth() {
  const authConsumer = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authConsumer.authenticated && router.pathname == "/login")
      router.push("/");
    else if (!authConsumer.authenticated && router.pathname !== "/login")
      router.push("/login");
  }, [authConsumer.authenticated, router]);
}
