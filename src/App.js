
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import WhyVivo from "./components/WhyVivo";
import AreYourReady from "./components/AreYouReady";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg">
      
      <div className="top text-white relative">
        <Navbar/>
        <Hero/>
      </div>

      <WhyVivo/>

      <AreYourReady/>

      <Footer />
    </main>
  );
}

export default App;
