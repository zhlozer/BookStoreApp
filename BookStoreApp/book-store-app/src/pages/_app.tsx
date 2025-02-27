import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <SWRConfig value={{ revalidateOnFocus: false, errorRetryCount: 1 }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </AuthProvider>
  );
}
