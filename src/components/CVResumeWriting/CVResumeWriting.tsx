import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumb } from "./Breadcrumb";

export const CVResumeWritingComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <Footer />
    </main>
  );
};
