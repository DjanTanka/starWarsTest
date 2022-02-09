import StoreProvider from "../src/store";
import "../styles/globals.sass";

function MyApp({Component, pageProps}) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
