import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { SignUpForm } from "./SignUpForm";

export const SignUpComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <SignUpForm />
      <Footer />
    </main>
  );
};
