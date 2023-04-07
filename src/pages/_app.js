import '@/styles/globals.css'
import Nav from '../../Components/Nav'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav/>
      <Component {...pageProps} />
    </div>
  )
}
