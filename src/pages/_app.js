import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
import Head from "next/head";
import "../styles/globals.css"


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <script src="https://kit.fontawesome.com/3cbd5b2231.js" crossorigin="anonymous"></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
