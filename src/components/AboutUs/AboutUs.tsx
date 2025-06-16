import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { AboutCompanies } from "./AboutCompanies";
import { AboutContact } from "./AboutContact";
import { AboutMissionVision } from "./AboutMissionVision";
import { Breadcrumb } from "./Breadcrumb";

export const AboutUsComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <AboutMissionVision />
      <AboutCompanies />
      <AboutContact />
      <Footer />
    </main>
  );
};
