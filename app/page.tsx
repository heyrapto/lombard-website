import Contact from "./components/sections/contact";
import Ecosystem from "./components/sections/ecosystem";
import Features from "./components/sections/features";
import HeroSection from "./components/sections/hero";
import Importance from "./components/sections/importance";
import News from "./components/sections/news";
import Partners from "./components/sections/partners";
import Security from "./components/sections/security";
import Testimonials from "./components/sections/testimonials";
import Video from "./components/sections/video";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Partners />
      <Importance />
      <Features />
      <Ecosystem />
      <Testimonials />
      <Security />
      <Video />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
