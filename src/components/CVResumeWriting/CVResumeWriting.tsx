import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumb } from "./Breadcrumb";
import { CVResumeWritingForm } from "./CVResumeWritingForm";

export const CVResumeWritingComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <CVResumeWritingForm />
      <Footer />
    </main>
  );
};
