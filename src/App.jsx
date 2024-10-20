import Navigation from "./component/layout/navigation";
import ExperiencePage from "./pages/experience";
import HeroSection from "./pages/hero section";
import ProjectPage from "./pages/projectpage";
import ServicePage from "./pages/service-page";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicePage />
      <ExperiencePage />
      <ProjectPage />
    </>
  );
}

export default App;
