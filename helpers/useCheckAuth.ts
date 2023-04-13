import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useCheckAuth() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && router.pathname == "/login")
      router.push("/");
    else if (status === "unauthenticated" && router.pathname !== "/login")
      router.push("/login");
  }, [status, router]);
}
