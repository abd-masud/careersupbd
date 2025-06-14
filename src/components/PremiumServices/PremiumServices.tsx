import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumb } from "./Breadcrumb";
import { PremiumServicesForm } from "./PremiumServicesForm";

export const PremiumServicesComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <PremiumServicesForm />
      <Footer />
    </main>
  );
};
