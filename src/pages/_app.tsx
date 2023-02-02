import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
const opensans = Open_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={opensans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
