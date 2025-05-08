import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Blogs } from "./blogs";
import { Clients } from "./Clients";
import { Combo } from "./Combo";
import { Counseling } from "./Counseling";
import { Expert } from "./Expert";
import { Header } from "./Header";
import { Preparation } from "./Preparation";
import { Services } from "./Services";
import { Success } from "./Success";

export const HomeComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Header />
      <Services />
      <Combo />
      <Counseling />
      <Preparation />
      <Success />
      <Expert />
      <Clients />
      <Blogs />
      <Footer />
    </main>
  );
};
