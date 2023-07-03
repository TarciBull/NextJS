import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
import Head from "next/head";
import "../styles/globals.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


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
