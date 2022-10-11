import Layout from "../components/Layout/Layout";
import ContactForm from "../components/Contact/ContactForm";

export default function contact() {
  return (
    <Layout title="Contact Us">
      <div className="container mx-auto px-5 py-12">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-4xl font-bold text-primary-text sm:text-5xl">
            Have Any Questions?
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary-text lg:w-2/3 lg:px-24">
            Need to get in touch with us? Contact us using the form below.
          </p>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}
