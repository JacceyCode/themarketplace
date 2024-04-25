import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <section>
      <Header />
      <section className="flex items-center justify-center p-10 font-mono text-4xl">
        Error loading content. Please try again.
      </section>
      <Footer />
    </section>
  );
};

export default ErrorPage;
