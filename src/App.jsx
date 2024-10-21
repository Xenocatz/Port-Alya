import Navigation from "./component/layout/navigation";
import ExperiencePage from "./pages/experience";
import Footer from "./pages/footer";
import HeroSection from "./pages/hero section";
import ProjectPage from "./pages/projectpage";
import ServicePage from "./pages/service-page";
import TestimonyPage from "./pages/testimony";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicePage />
      <ExperiencePage />
      <ProjectPage />
      <TestimonyPage />
      <Footer />
    </>
  );
}

export default App;
