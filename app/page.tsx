import HeroSection from "./components/sections/hero";
import Navbar from "./components/shared/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="min-h-screen"></div>
    </main>
  );
}
