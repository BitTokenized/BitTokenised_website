import "animate.css";
import "../styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen font-poppins px-6 md:px-6 lg:px-8 xl:px-32 2xl:px-36 ">
      <NavBar />
      <span className="grow mb-2">
        <Component {...pageProps} />
      </span>
      <Footer />
    </div>
  );
}

export default MyApp;
