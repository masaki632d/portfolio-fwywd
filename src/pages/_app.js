// import App from "next/app";
import React from "react";
import "../../styles/global.css";
// import Layout from "../components/Layout";

import { Provider } from "react-redux";
import { store } from "./store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
