import "@/styles/globals.css";
import "@/components/Layout";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className="mt-20">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
