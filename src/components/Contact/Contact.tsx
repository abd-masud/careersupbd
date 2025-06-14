import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumb } from "./Breadcrumb";
import { ContactForm } from "./ContactForm";

export const ContactComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Breadcrumb />
      <ContactForm />
      <Footer />
    </main>
  );
};
