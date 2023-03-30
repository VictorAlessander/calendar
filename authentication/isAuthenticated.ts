export default function isAuthenticated() {
  const data: { authenticated: boolean } = { authenticated: false };

  if (!data.authenticated)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return { props: {} };
}
