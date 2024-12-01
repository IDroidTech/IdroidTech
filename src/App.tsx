import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from "./components/header.tsx";
import About from "./components/about.tsx";
import Portfolio from "./components/portfolio.tsx";
import Contact from "./components/contact.tsx";
import Footer from "./components/footer.tsx";


function App() {

  return (
    <>
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        < SpeedInsights />
    </>
  )
}

export default App
