import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumb } from "./Breadcrumb";
import { ServicesList } from "./ServicesList";

export const ServicesComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <ServicesList />
      <Footer />
    </main>
  );
};
