import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import { LoginForm } from "./LoginForm";

export const LoginComponent = () => {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <LoginForm />
      <Footer />
    </main>
  );
};
