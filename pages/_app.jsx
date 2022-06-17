import "../styles/globals.css";
import { UserProvider } from "../contexts/user_context";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
