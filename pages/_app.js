import SideBar from '../components/layout/sidebar'
import NavBar from '../components/layout/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SideBar />
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
