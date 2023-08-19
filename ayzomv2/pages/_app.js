import "../styles/globals.css";
import Layout from '../components/layout'
import TGbot from '../components/tgbot'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <TGbot></TGbot>
      <Component {...pageProps} />
    </Layout>
  )
}