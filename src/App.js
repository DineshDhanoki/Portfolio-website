import "./App.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Skills />
      <Experience />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
