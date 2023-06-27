import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
import Head from "next/head";
import "../styles/globals.css"


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
