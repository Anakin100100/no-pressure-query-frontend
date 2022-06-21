import "../styles/globals.css";
import { UserProvider } from "../contexts/user_context";
import { usePostHog } from "next-use-posthog";

function MyApp({ Component, pageProps }) {
  usePostHog("phc_F5YZFr5Ntd1zjJHHFOfLB13BdUxR3f7KnBFj4JvX0yI", {
    api_host: "https://app.posthog.com",
  });

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
