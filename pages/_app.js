import SideBar from '../components/layout/Sidebar';
import NavBar from '../components/layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SideBar />
      <main id='main'>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
