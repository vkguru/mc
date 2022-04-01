import SideBar from '../layout/Sidebar';
import NavBar from '../layout/navbar';
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
