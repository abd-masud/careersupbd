import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumb } from "./Breadcrumb";
import { CareerCounsellingList } from "./CareerCounsellingList";

export const CareerCounsellingComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <CareerCounsellingList />
      <Footer />
    </main>
  );
};
