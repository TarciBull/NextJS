import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
import Head from "next/head";
import "../styles/globals.css"


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
